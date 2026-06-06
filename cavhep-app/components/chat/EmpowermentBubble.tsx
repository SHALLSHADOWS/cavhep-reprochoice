import React from 'react';
import { View, Text } from 'react-native';
import { Heart } from 'lucide-react-native';
import { AIAvatar } from './AIAvatar';

export function EmpowermentBubble({ timestamp }: { timestamp: Date }) {
  return (
    <View className="flex-row items-end gap-2 mb-3">
      <AIAvatar size={32} />
      <View className="max-w-[78%] bg-primary-pale border border-primary/20 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
        <View className="flex-row items-center gap-1.5 mb-1.5">
          <Heart size={14} color="#1E5631" />
          <Text className="text-xs font-semibold text-primary">You are in control.</Text>
        </View>
        <Text className="text-sm text-ink leading-5">
          You decide what's right for you and your future.
        </Text>
        <Text className="text-xs text-ink-muted text-right mt-1">
          {timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    </View>
  );
}
