import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Message } from '../components/chat/ChatBubble';
import { sendMessageToOpenAI, hasOpenAIKey } from '../services/openai';
import { getOfflineResponse } from '../services/offlineChat';

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (content: string, isOnline: boolean) => Promise<void>;
  clearHistory: () => void;
}

const OFFLINE_GRID_TRIGGERS = [
  'méthodes disponibles',
  'quelles méthodes',
  'options contraceptives',
  'family planning',
  'options available',
  'explorer',
  'comparer',
  'différentes méthodes',
  'toutes les méthodes',
];

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      messages: [],
      isTyping: false,

      sendMessage: async (content: string, isOnline: boolean) => {
        const userMessage: Message = {
          id: `msg-${Date.now()}-user`,
          role: 'user',
          content,
          timestamp: new Date(),
          type: 'text',
        };

        set((state) => ({
          messages: [...state.messages, userMessage],
          isTyping: true,
        }));

        let responseContent: string;

        try {
          if (isOnline && hasOpenAIKey()) {
            const history = get().messages.map((m) => ({
              role: m.role,
              content: m.content,
            }));
            responseContent = await sendMessageToOpenAI(content, history);
          } else {
            await new Promise((resolve) => setTimeout(resolve, 800));
            const lower = content.toLowerCase();
            const shouldShowGridOffline = OFFLINE_GRID_TRIGGERS.some((t) =>
              lower.includes(t)
            );
            responseContent = shouldShowGridOffline
              ? `Voici les méthodes contraceptives disponibles. OPTIONS_GRID Consultez chaque fiche pour les détails. ⚕️ Consultez un professionnel pour un choix personnalisé.`
              : getOfflineResponse(content);
          }
        } catch (error) {
          console.error('Chat error:', error);
          responseContent =
            "Une erreur s'est produite. Veuillez vérifier votre connexion et réessayer. En mode hors ligne, consultez la FAQ pour des réponses instantanées.";
        }

        const cleanedContent = responseContent
          .replace('OPTIONS_GRID', '')
          .replace('EMPOWERMENT_MSG', '')
          .trim();

        const shouldShowGrid = responseContent.includes('OPTIONS_GRID');
        const shouldShowEmpowerment = responseContent.includes('EMPOWERMENT_MSG');

        const now = Date.now();
        const newMessages: Message[] = [];

        if (cleanedContent) {
          newMessages.push({
            id: `msg-${now}-assistant`,
            role: 'assistant',
            content: cleanedContent,
            timestamp: new Date(),
            type: 'text',
          });
        }

        if (shouldShowGrid) {
          newMessages.push({
            id: `msg-${now}-grid`,
            role: 'assistant',
            content: '',
            timestamp: new Date(now + 1),
            type: 'methods_grid',
          });
        }

        if (shouldShowEmpowerment) {
          newMessages.push({
            id: `msg-${now}-emp`,
            role: 'assistant',
            content: '',
            timestamp: new Date(now + 2),
            type: 'empowerment',
          });
        }

        set((state) => ({
          messages: [...state.messages, ...newMessages],
          isTyping: false,
        }));
      },

      clearHistory: () => set({ messages: [] }),
    }),
    {
      name: 'cavhep-chat-history',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ messages: state.messages }),
    }
  )
);
