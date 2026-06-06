import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary: 'bg-primary active:bg-primary-light',
  secondary: 'bg-secondary active:bg-secondary-light',
  outline: 'border border-primary bg-transparent',
  ghost: 'bg-transparent',
  danger: 'bg-red-600',
};

const LABEL_STYLES: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  outline: 'text-primary',
  ghost: 'text-primary',
  danger: 'text-white',
};

const SIZE_STYLES: Record<Size, string> = {
  sm: 'px-3 py-2 rounded-lg',
  md: 'px-5 py-3 rounded-xl',
  lg: 'px-6 py-4 rounded-2xl',
};

const LABEL_SIZE: Record<Size, string> = {
  sm: 'text-sm font-medium',
  md: 'text-base font-semibold',
  lg: 'text-lg font-bold',
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`flex-row items-center justify-center gap-2 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${fullWidth ? 'w-full' : 'self-start'} ${disabled || loading ? 'opacity-50' : ''}`}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? '#1E5631' : '#FFFFFF'}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && <View>{icon}</View>}
          <Text className={`${LABEL_STYLES[variant]} ${LABEL_SIZE[size]}`}>{label}</Text>
          {icon && iconPosition === 'right' && <View>{icon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
}
