import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/layout/Header';
import { MethodDetail } from '../../components/methods/MethodDetail';
import { METHODS } from '../../data/methods';

export default function MethodDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const method = METHODS.find((m) => m.id === id);

  if (!method) return null;

  return (
    <SafeAreaView className="flex-1 bg-cream" edges={['top']}>
      <Header title={method.name} showBack />
      <MethodDetail method={method} />
    </SafeAreaView>
  );
}
