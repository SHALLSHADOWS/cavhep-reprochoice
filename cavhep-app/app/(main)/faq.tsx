import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, ChevronDown, ChevronUp, WifiOff } from 'lucide-react-native';
import { Header } from '../../components/layout/Header';
import { FAQ_DATA, FAQ_CATEGORIES, type FAQItem } from '../../data/faq';
import { Badge } from '../../components/ui/Badge';

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.85}
      className="bg-surface rounded-2xl mb-2 overflow-hidden border border-cream-dark"
    >
      <View className="flex-row items-center justify-between px-4 py-3.5">
        <Text className="text-sm font-semibold text-ink flex-1 pr-3 leading-5">
          {item.question}
        </Text>
        {expanded ? (
          <ChevronUp size={18} color="#4A6B4A" />
        ) : (
          <ChevronDown size={18} color="#8BA88B" />
        )}
      </View>
      {expanded && (
        <View className="px-4 pb-4">
          <View className="h-px bg-cream-dark mb-3" />
          <Text className="text-sm text-ink-secondary leading-5">{item.answer}</Text>
          <View className="flex-row flex-wrap gap-1.5 mt-3">
            {item.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="muted" />
            ))}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function FAQScreen() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const categories = ['Toutes', ...FAQ_CATEGORIES];

  const filtered = FAQ_DATA.filter((item) => {
    const matchSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === 'Toutes' || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <SafeAreaView className="flex-1 bg-cream" edges={['top']}>
      <Header title="FAQ" subtitle="Foire aux questions — hors ligne" />

      <View className="bg-primary-pale px-4 py-2 flex-row items-center gap-2">
        <WifiOff size={13} color="#1E5631" />
        <Text className="text-xs text-primary font-medium">
          Disponible sans connexion internet
        </Text>
      </View>

      <View className="px-4 pt-3 pb-2">
        <View className="flex-row items-center bg-surface border border-cream-dark rounded-xl px-3 py-2.5 gap-2">
          <Search size={16} color="#8BA88B" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Rechercher dans la FAQ…"
            placeholderTextColor="#8BA88B"
            className="flex-1 text-sm text-ink"
          />
        </View>
      </View>

      <View className="px-4 pb-2">
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setActiveCategory(item)}>
              <Badge
                label={item}
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
        renderItem={({ item }) => <FAQItemComponent item={item} />}
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
