import React from 'react';
import { View, Text } from 'react-native';

type BadgeVariant = 'primary' | 'secondary' | 'amber' | 'success' | 'muted';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const VARIANT: Record<BadgeVariant, { bg: string; text: string }> = {
  primary: { bg: 'bg-primary-pale', text: 'text-primary' },
  secondary: { bg: 'bg-secondary-pale', text: 'text-secondary' },
  amber: { bg: 'bg-amber-pale', text: 'text-amber' },
  success: { bg: 'bg-green-100', text: 'text-green-700' },
  muted: { bg: 'bg-cream-dark', text: 'text-ink-secondary' },
};

export function Badge({ label, variant = 'primary' }: BadgeProps) {
  return (
    <View className={`${VARIANT[variant].bg} px-2.5 py-0.5 rounded-full self-start`}>
      <Text className={`${VARIANT[variant].text} text-xs font-medium`}>{label}</Text>
    </View>
  );
}
