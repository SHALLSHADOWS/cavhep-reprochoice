import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft, Wifi, WifiOff } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  isOnline?: boolean;
  showConnectivity?: boolean;
  rightAction?: React.ReactNode;
}

export function Header({
  title,
  subtitle,
  showBack = false,
  isOnline = true,
  showConnectivity = false,
  rightAction,
}: HeaderProps) {
  const router = useRouter();

  return (
    <View className="bg-primary px-4 pt-2 pb-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3 flex-1">
          {showBack && (
            <TouchableOpacity onPress={() => router.back()} className="mr-1">
              <ArrowLeft size={22} color="#FFFFFF" />
            </TouchableOpacity>
          )}
          <View className="flex-1">
            <Text className="text-white text-xl font-bold">{title}</Text>
            {subtitle && (
              <Text className="text-white/70 text-sm mt-0.5">{subtitle}</Text>
            )}
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          {showConnectivity && (
            <View
              className={`flex-row items-center gap-1 px-2 py-1 rounded-full ${
                isOnline ? 'bg-white/20' : 'bg-secondary/80'
              }`}
            >
              {isOnline ? (
                <Wifi size={12} color="#FFFFFF" />
              ) : (
                <WifiOff size={12} color="#FFFFFF" />
              )}
              <Text className="text-white text-xs font-medium">
                {isOnline ? 'En ligne' : 'Hors ligne'}
              </Text>
            </View>
          )}
          {rightAction}
        </View>
      </View>
    </View>
  );
}
