import React from 'react';
import { View } from 'react-native';

export function Separator({ className = '' }: { className?: string }) {
  return <View className={`h-px bg-cream-dark my-2 ${className}`} />;
}
