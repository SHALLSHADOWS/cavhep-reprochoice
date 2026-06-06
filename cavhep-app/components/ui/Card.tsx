import React from 'react';
import { View, TouchableOpacity } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
  elevated?: boolean;
  bordered?: boolean;
}

export function Card({
  children,
  className = '',
  onPress,
  elevated = true,
  bordered = false,
}: CardProps) {
  const base = `bg-surface rounded-2xl p-4 ${elevated ? 'shadow-sm' : ''} ${bordered ? 'border border-border' : ''}`;

  if (onPress) {
    return (
      <TouchableOpacity
        className={`${base} ${className}`}
        onPress={onPress}
        activeOpacity={0.85}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View className={`${base} ${className}`}>{children}</View>;
}
