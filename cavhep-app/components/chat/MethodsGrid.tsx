import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { METHODS } from '../../data/methods';
import { AIAvatar } from './AIAvatar';

export function MethodsGrid({ timestamp }: { timestamp: Date }) {
  const router = useRouter();

  return (
    <View className="flex-row items-end gap-2 mb-3">
      <AIAvatar size={32} />
      <View className="flex-1 max-w-[85%]">
        <View className="bg-surface border border-cream-dark rounded-2xl rounded-bl-sm shadow-sm overflow-hidden">
          <View className="px-3 pt-3 pb-2">
            <Text className="text-xs font-semibold text-primary mb-0.5">
              Options disponibles
            </Text>
            <Text className="text-xs text-ink-muted">Appuyez pour en savoir plus</Text>
          </View>

          <View className="flex-row flex-wrap px-2 pb-2 gap-1.5">
            {METHODS.map((method) => (
              <TouchableOpacity
                key={method.id}
                onPress={() => router.push(`/method/${method.id}` as any)}
                activeOpacity={0.8}
                style={{ width: '30.5%' }}
                className="bg-cream rounded-xl p-2 items-center gap-1"
              >
                <View
                  style={{ backgroundColor: method.colorPale }}
                  className="w-10 h-10 rounded-xl items-center justify-center"
                >
                  <Text style={{ fontSize: 20 }}>{method.icon}</Text>
                </View>
                <Text
                  className="text-xs font-medium text-ink text-center"
                  numberOfLines={2}
                >
                  {method.name}
                </Text>
                <Text className="text-xs text-primary font-bold">{method.effectiveness}%</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => router.push('/(main)/methods' as any)}
            className="flex-row items-center justify-center gap-1 border-t border-cream-dark py-2.5"
            activeOpacity={0.8}
          >
            <Text className="text-xs font-semibold text-primary">
              Voir toutes les fiches détaillées
            </Text>
            <ChevronRight size={12} color="#1E5631" />
          </TouchableOpacity>
        </View>
        <Text className="text-xs text-ink-muted text-right mt-1 pr-1">
          {timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    </View>
  );
}
