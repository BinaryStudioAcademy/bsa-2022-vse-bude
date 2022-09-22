import { ReactNode } from 'react';
import { ColorValue, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { ButtonAppearance } from '~/common/enums/enums';

type ButtonProps = Omit<PressableProps, 'style'> & {
  label: string;
  appearance?: ButtonAppearance;
  textColor?: ColorValue;
  buttonColor?: ColorValue;
  compact?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isLoading?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export type { ButtonProps };
