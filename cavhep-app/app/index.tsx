import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Index() {
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('onboarding_done').then((val) => {
      setTarget(val === 'true' ? '/(main)/chat' : '/onboarding');
    });
  }, []);

  if (!target) return null;
  return <Redirect href={target as any} />;
}
