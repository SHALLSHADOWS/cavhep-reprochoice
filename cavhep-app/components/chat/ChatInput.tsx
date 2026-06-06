import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { SendHorizonal } from 'lucide-react-native';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  disabled = false,
  placeholder = 'Ask anything…',
}: ChatInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim() || disabled) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <View className="flex-row items-end gap-2 px-4 py-3 bg-surface border-t border-cream-dark">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        placeholderTextColor="#8BA88B"
        multiline
        maxLength={500}
        editable={!disabled}
        className="flex-1 bg-cream rounded-2xl px-4 py-3 text-ink text-sm max-h-28"
        onSubmitEditing={handleSend}
        returnKeyType="send"
      />
      <TouchableOpacity
        onPress={handleSend}
        disabled={!text.trim() || disabled}
        className={`w-11 h-11 rounded-2xl items-center justify-center ${
          text.trim() && !disabled ? 'bg-primary' : 'bg-cream-dark'
        }`}
        activeOpacity={0.8}
      >
        <SendHorizonal
          size={18}
          color={text.trim() && !disabled ? '#FFFFFF' : '#8BA88B'}
        />
      </TouchableOpacity>
    </View>
  );
}
