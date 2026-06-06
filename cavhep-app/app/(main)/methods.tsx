import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Header } from '../../components/layout/Header';
import { MethodCard } from '../../components/methods/MethodCard';
import { Badge } from '../../components/ui/Badge';
import { METHODS } from '../../data/methods';

const CATEGORIES = ['Toutes', 'long-acting', 'short-acting', 'barrier', 'natural'];
const CATEGORY_LABELS: Record<string, string> = {
  Toutes: 'Toutes',
  'long-acting': 'Longue durée',
  'short-acting': 'Courte durée',
  barrier: 'Barrière',
  natural: 'Naturelle',
};

export default function MethodsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Toutes');

  const filtered = METHODS.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.summary.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === 'Toutes' || m.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <SafeAreaView className="flex-1 bg-cream" edges={['top']}>
      <Header
        title="Méthodes contraceptives"
        subtitle={`${METHODS.length} méthodes disponibles`}
      />

      <View className="px-4 pt-3 pb-2">
        <View className="flex-row items-center bg-surface border border-cream-dark rounded-xl px-3 py-2.5 gap-2">
          <Search size={16} color="#8BA88B" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Rechercher une méthode…"
            placeholderTextColor="#8BA88B"
            className="flex-1 text-sm text-ink"
          />
        </View>
      </View>

      <View className="px-4 pb-2">
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setActiveCategory(item)}>
              <Badge
                label={CATEGORY_LABELS[item]}
                variant={activeCategory === item ? 'primary' : 'muted'}
              />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View className="w-2" />}
          contentContainerStyle={{ paddingVertical: 4 }}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MethodCard
            method={item}
            onPress={() => router.push(`/method/${item.id}` as any)}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ListEmptyComponent={
          <View className="items-center py-12">
            <Text className="text-ink-muted text-sm">
              Aucun résultat pour "{search}"
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
