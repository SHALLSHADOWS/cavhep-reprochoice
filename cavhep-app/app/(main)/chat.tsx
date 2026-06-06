import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WifiOff, ShieldAlert, X } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../../components/layout/Header';
import { ChatBubble, type Message } from '../../components/chat/ChatBubble';
import { ChatInput } from '../../components/chat/ChatInput';
import { TypingIndicator } from '../../components/chat/TypingIndicator';
import { useChatStore } from '../../stores/chatStore';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';

export default function ChatScreen() {
  const { messages, isTyping, sendMessage } = useChatStore();
  const isOnline = useNetworkStatus();
  const flatListRef = useRef<FlatList>(null);
  const [showISTBanner, setShowISTBanner] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('ist_banner_dismissed').then((val) => {
      if (val === 'true') setShowISTBanner(false);
    });
  }, []);

  const dismissISTBanner = async () => {
    await AsyncStorage.setItem('ist_banner_dismissed', 'true');
    setShowISTBanner(false);
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [messages, isTyping]);

  return (
    <SafeAreaView className="flex-1 bg-cream" edges={['top']}>
      <Header
        title="ReproChoice AI"
        subtitle="Votre guide contraceptif"
        showConnectivity
        isOnline={isOnline}
      />

      {showISTBanner && (
        <View className="bg-secondary-pale px-3 py-2 flex-row items-center gap-2 border-b border-secondary/20">
          <ShieldAlert size={14} color="#D4621A" />
          <Text className="text-xs text-secondary font-medium flex-1">
            Rappel : Aucune méthode ne protège contre les IST. Utilisez un préservatif.
          </Text>
          <TouchableOpacity
            onPress={dismissISTBanner}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <X size={13} color="#D4621A" />
          </TouchableOpacity>
        </View>
      )}

      {!isOnline && (
        <View className="bg-amber-pale px-4 py-2 flex-row items-center gap-2">
          <WifiOff size={14} color="#F5A623" />
          <Text className="text-xs text-amber font-medium">
            Hors ligne — Réponses basées sur la FAQ locale
          </Text>
        </View>
      )}

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatBubble message={item} />}
          contentContainerStyle={{ padding: 16, paddingBottom: 8 }}
          ListEmptyComponent={
            <WelcomeMessage onSuggestion={(text) => sendMessage(text, isOnline)} />
          }
          ListFooterComponent={isTyping ? <TypingIndicator /> : null}
          showsVerticalScrollIndicator={false}
        />
        <ChatInput
          onSend={(text) => sendMessage(text, isOnline)}
          disabled={isTyping}
          placeholder={isOnline ? 'Ask anything…' : 'Mode hors ligne — question simple…'}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function WelcomeMessage({ onSuggestion }: { onSuggestion: (text: string) => void }) {
  const SUGGESTIONS = [
    'Quelles sont les méthodes contraceptives disponibles ?',
    "Quelle méthode convient le mieux si j'allaite ?",
    "Quels sont les effets secondaires de l'implant ?",
  ];

  return (
    <View className="flex-1 items-center justify-center py-8 px-4">
      <View className="w-20 h-20 rounded-3xl bg-primary items-center justify-center mb-4">
        <Text style={{ fontSize: 36 }}>🌿</Text>
      </View>
      <Text className="text-xl font-bold text-ink text-center mb-1">
        Hello, I'm ReproChoice AI
      </Text>
      <Text className="text-sm text-ink-secondary text-center leading-5 mb-1">
        I'm here to support your reproductive health choices.
      </Text>
      <Text className="text-sm text-primary font-semibold text-center mb-6">
        How can I help you today?
      </Text>

      <View className="w-full gap-2 mb-6">
        {SUGGESTIONS.map((suggestion, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => onSuggestion(suggestion)}
            activeOpacity={0.8}
            className="bg-surface border border-cream-dark rounded-xl px-4 py-3 flex-row items-center gap-2"
          >
            <Text style={{ fontSize: 16 }}>💡</Text>
            <Text className="text-sm text-ink-secondary flex-1">{suggestion}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="items-center border-t border-cream-dark pt-4 w-full">
        <Text className="text-primary font-bold text-sm text-center tracking-wide">
          Knowledge. Privacy. Choice.
        </Text>
        <Text className="text-ink-muted text-xs text-center mt-0.5">
          Your health journey, supported.
        </Text>
      </View>

      <Text className="text-xs text-ink-muted text-center mt-4 leading-4 px-4">
        ⚕️ Cet outil vous informe. Il ne remplace pas un professionnel de santé.
      </Text>
    </View>
  );
}
