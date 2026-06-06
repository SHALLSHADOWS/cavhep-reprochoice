import React from 'react';
import { View, Text } from 'react-native';

interface ProgressBarProps {
  value: number;
  label?: string;
  color?: string;
}

export function ProgressBar({ value, label, color = '#1E5631' }: ProgressBarProps) {
  return (
    <View>
      {label && <Text className="text-xs text-ink-secondary mb-1">{label}</Text>}
      <View className="h-2 bg-cream-dark rounded-full overflow-hidden">
        <View style={{ width: `${value}%`, backgroundColor: color }} className="h-full rounded-full" />
      </View>
      <Text className="text-xs text-ink-muted mt-0.5 text-right">{value}%</Text>
    </View>
  );
}
