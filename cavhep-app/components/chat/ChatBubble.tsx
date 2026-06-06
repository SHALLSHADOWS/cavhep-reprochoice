import React from 'react';
import { View, Text } from 'react-native';
import { AIAvatar } from './AIAvatar';
import { MethodsGrid } from './MethodsGrid';
import { EmpowermentBubble } from './EmpowermentBubble';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'methods_grid' | 'empowerment';
}

interface ChatBubbleProps {
  message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user';

  if (message.type === 'methods_grid') {
    return <MethodsGrid timestamp={message.timestamp} />;
  }

  if (message.type === 'empowerment') {
    return <EmpowermentBubble timestamp={message.timestamp} />;
  }

  return (
    <View
      className={`flex-row items-end gap-2 mb-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {!isUser && <AIAvatar size={32} />}
      <View
        className={`max-w-[78%] px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-primary rounded-br-sm'
            : 'bg-surface rounded-bl-sm shadow-sm border border-cream-dark'
        }`}
      >
        <Text className={`text-sm leading-5 ${isUser ? 'text-white' : 'text-ink'}`}>
          {message.content}
        </Text>
        <Text
          className={`text-xs mt-1 text-right ${isUser ? 'text-white/60' : 'text-ink-muted'}`}
        >
          {message.timestamp.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    </View>
  );
}
