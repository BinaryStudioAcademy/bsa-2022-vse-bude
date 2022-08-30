import { ColorValue, PressableProps } from 'react-native';
import { ButtonAppearance } from '~/common/enums/enums';

type ButtonProps = Omit<PressableProps, 'style'> & {
  label: string;
  appearance?: ButtonAppearance;
  textColor?: ColorValue;
  buttonColor?: ColorValue;
  compact?: boolean;
};

export type { ButtonProps };
