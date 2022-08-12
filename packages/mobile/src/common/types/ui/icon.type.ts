import { ColorValue, TextProps } from 'react-native';

type IconProps = TextProps & {
  name: string;
  size?: number;
  color?: ColorValue;
};

type CustomIconProps = Omit<IconProps, 'name'>;

type AppIcon = React.FC<CustomIconProps>;

export type { IconProps, CustomIconProps, AppIcon };
