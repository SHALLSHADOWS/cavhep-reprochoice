import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight, Clock } from 'lucide-react-native';
import type { ContraceptiveMethod } from '../../data/methods';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';

interface MethodCardProps {
  method: ContraceptiveMethod;
  onPress: () => void;
}

const AVAILABILITY_LABELS: Record<string, string> = {
  widely: 'Disponible partout',
  'clinic-only': 'Centre de santé',
  pharmacy: 'Pharmacie',
};

const CATEGORY_LABELS: Record<string, string> = {
  'long-acting': 'Longue durée',
  'short-acting': 'Courte durée',
  barrier: 'Barrière',
  natural: 'Naturelle',
};

export function MethodCard({ method, onPress }: MethodCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className="bg-surface rounded-2xl p-4 mb-3 shadow-sm border border-cream-dark"
    >
      <View className="flex-row items-start gap-3">
        <View
          style={{ backgroundColor: method.colorPale }}
          className="w-12 h-12 rounded-xl items-center justify-center"
        >
          <Text style={{ fontSize: 24 }}>{method.icon}</Text>
        </View>
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="text-base font-bold text-ink">{method.name}</Text>
            <ChevronRight size={18} color="#8BA88B" />
          </View>
          <Text className="text-sm text-ink-secondary mb-2 leading-5">{method.summary}</Text>
          <View className="flex-row gap-2 mb-3 flex-wrap">
            <Badge label={CATEGORY_LABELS[method.category]} variant="primary" />
            <Badge label={AVAILABILITY_LABELS[method.availability]} variant="muted" />
          </View>
          <View className="flex-row gap-3 mb-2">
            <View className="flex-row items-center gap-1">
              <Clock size={12} color="#4A6B4A" />
              <Text className="text-xs text-ink-secondary">{method.duration}</Text>
            </View>
          </View>
          <ProgressBar value={method.effectiveness} label="Efficacité" color={method.color} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
