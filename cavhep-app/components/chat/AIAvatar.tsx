import React from 'react';
import { View } from 'react-native';
import { Leaf } from 'lucide-react-native';

export function AIAvatar({ size = 32 }: { size?: number }) {
  return (
    <View
      style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: '#1E5631' }}
      className="items-center justify-center"
    >
      <Leaf size={size * 0.45} color="#FFFFFF" />
    </View>
  );
}
