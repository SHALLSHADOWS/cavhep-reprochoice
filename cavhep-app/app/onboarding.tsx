import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Lock, Globe, Wifi, Heart, ShieldCheck } from 'lucide-react-native';

const SLIDES = [
  {
    icon: <Heart size={56} color="#FFFFFF" />,
    bg: 'bg-primary',
    titleColor: 'text-white',
    subtitleColor: 'text-white/80',
    descColor: 'text-white/70',
    dotActive: 'bg-white',
    dotInactive: 'bg-white/40',
    btnBg: 'bg-white',
    btnText: 'text-primary',
    skipColor: 'text-white/60',
    title: 'CAVHEP ReproChoice AI',
    subtitle: 'Knowledge. Privacy. Choice.',
    description:
      "Your health journey, supported. Un outil d'information sur la contraception, conçu pour chaque femme en Afrique subsaharienne.",
  },
  {
    icon: <Lock size={56} color="#1E5631" />,
    bg: 'bg-cream',
    titleColor: 'text-ink',
    subtitleColor: 'text-ink-secondary',
    descColor: 'text-ink-secondary',
    dotActive: 'bg-primary',
    dotInactive: 'bg-ink-muted',
    btnBg: 'bg-primary',
    btnText: 'text-white',
    skipColor: 'text-ink-muted',
    title: '100% Privé',
    subtitle: 'Vos conversations restent sur votre téléphone.',
    description:
      "Aucune donnée personnelle n'est partagée. Vous êtes en contrôle de votre vie privée.",
  },
  {
    icon: <Globe size={56} color="#D4621A" />,
    bg: 'bg-secondary-pale',
    titleColor: 'text-ink',
    subtitleColor: 'text-ink-secondary',
    descColor: 'text-ink-secondary',
    dotActive: 'bg-secondary',
    dotInactive: 'bg-ink-muted',
    btnBg: 'bg-secondary',
    btnText: 'text-white',
    skipColor: 'text-ink-muted',
    title: 'Langue Locale',
    subtitle: 'Information dans votre langue.',
    description:
      'Disponible en français et en anglais, avec des références adaptées au contexte africain.',
  },
  {
    icon: <ShieldCheck size={56} color="#1E5631" />,
    bg: 'bg-primary-pale',
    titleColor: 'text-ink',
    subtitleColor: 'text-ink-secondary',
    descColor: 'text-ink-secondary',
    dotActive: 'bg-primary',
    dotInactive: 'bg-ink-muted',
    btnBg: 'bg-primary',
    btnText: 'text-white',
    skipColor: 'text-ink-muted',
    title: 'Safe & Respectful',
    subtitle: 'Judgment-free support, tailored to you.',
    description:
      'Un espace bienveillant et sans jugement. Vous méritez des informations claires, respectueuses de vos valeurs et de votre culture.',
  },
  {
    icon: <Wifi size={56} color="#1E5631" />,
    bg: 'bg-cream',
    titleColor: 'text-ink',
    subtitleColor: 'text-ink-secondary',
    descColor: 'text-ink-secondary',
    dotActive: 'bg-primary',
    dotInactive: 'bg-ink-muted',
    btnBg: 'bg-primary',
    btnText: 'text-white',
    skipColor: 'text-ink-muted',
    title: 'Fonctionne Hors Ligne',
    subtitle: 'Pas de connexion ? Pas de problème.',
    description:
      'La FAQ complète sur la contraception est disponible même sans internet. Conçu pour les environnements à faible connectivité.',
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const slide = SLIDES[current];
  const isLast = current === SLIDES.length - 1;

  const finish = async () => {
    await AsyncStorage.setItem('onboarding_done', 'true');
    router.replace('/(main)/chat');
  };

  const handleNext = async () => {
    if (isLast) {
      await finish();
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${slide.bg}`}>
      <View className="flex-1 items-center justify-center px-8">
        <View
          className={`w-28 h-28 rounded-3xl items-center justify-center mb-8 ${
            current === 0 ? 'bg-primary-light' : 'bg-surface'
          }`}
        >
          {slide.icon}
        </View>
        <Text className={`text-3xl font-bold text-center mb-2 ${slide.titleColor}`}>
          {slide.title}
        </Text>
        <Text className={`text-base font-semibold text-center mb-3 ${slide.subtitleColor}`}>
          {slide.subtitle}
        </Text>
        <Text className={`text-sm text-center leading-6 ${slide.descColor}`}>
          {slide.description}
        </Text>
      </View>

      <View className="px-8 pb-8">
        <View className="flex-row justify-center gap-2 mb-6">
          {SLIDES.map((_, i) => (
            <View
              key={i}
              className={`h-2 rounded-full ${
                i === current ? `w-6 ${slide.dotActive}` : `w-2 ${slide.dotInactive}`
              }`}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.85}
          className={`w-full py-4 rounded-2xl items-center ${slide.btnBg}`}
        >
          <Text className={`text-base font-bold ${slide.btnText}`}>
            {isLast ? 'Commencer' : 'Suivant'}
          </Text>
        </TouchableOpacity>

        {!isLast && (
          <TouchableOpacity onPress={finish} className="items-center mt-4">
            <Text className={`text-sm ${slide.skipColor}`}>Passer</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
