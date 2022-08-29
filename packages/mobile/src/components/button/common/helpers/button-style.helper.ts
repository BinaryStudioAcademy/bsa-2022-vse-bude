import { ColorValue, ViewStyle } from 'react-native';
import Color from 'color';

import { ColorPalette } from '@vse-bude/shared';
import { ButtonAppearance } from '~/common/enums/enums';
import { Theme } from '~/common/types/types';
import { ButtonProps } from '../types/types';

const getButtonBackgroundColor = ({
  appearance,
  buttonColor,
  disabled,
  theme,
}: Pick<ButtonProps, 'appearance' | 'buttonColor' | 'disabled'> & {
  theme: Theme;
}): ColorValue => {
  if (appearance === ButtonAppearance.FILLED) {
    if (disabled) {
      return ColorPalette.GRAY_200;
    }

    return buttonColor ?? theme.colors.primary;
  }

  return 'transparent';
};

const getButtonTextColor = ({
  appearance,
  textColor,
  buttonColor,
  disabled,
  theme,
}: Pick<
  ButtonProps,
  'appearance' | 'buttonColor' | 'textColor' | 'disabled'
> & {
  theme: Theme;
}): ColorValue => {
  if (textColor && !disabled) {
    return textColor;
  }

  if (appearance === ButtonAppearance.FILLED) {
    if (disabled) {
      return ColorPalette.WHITE_100;
    }

    return theme.colors.onPrimary;
  }

  if (disabled) {
    return ColorPalette.GRAY_200;
  }

  return buttonColor ?? theme.colors.primary;
};

const getButtonBorderColor = ({
  appearance,
  buttonColor,
  disabled,
  theme,
}: Pick<ButtonProps, 'appearance' | 'buttonColor' | 'disabled'> & {
  theme: Theme;
}): ColorValue => {
  if (appearance === ButtonAppearance.OUTLINED) {
    if (disabled) {
      return ColorPalette.GRAY_200;
    }

    return buttonColor ?? theme.colors.primary;
  }

  return 'transparent';
};

const getButtonBorderWidth = ({
  appearance,
}: Pick<ButtonProps, 'appearance'>): number => {
  return appearance === ButtonAppearance.OUTLINED ? 1 : 0;
};

const getButtonContainerStyle = ({
  appearance,
}: Pick<ButtonProps, 'appearance'>): ViewStyle | undefined => {
  return appearance === ButtonAppearance.FILLED ? { elevation: 2 } : undefined;
};

const getButtonRippleColor = ({
  textColor,
}: {
  textColor: ColorValue;
}): ColorValue => {
  return Color(textColor).alpha(0.2).rgb().string();
};

const getButtonHeight = ({ compact }: Pick<ButtonProps, 'compact'>): number => {
  return compact ? 36 : 46;
};

export {
  getButtonBackgroundColor,
  getButtonBorderColor,
  getButtonBorderWidth,
  getButtonContainerStyle,
  getButtonRippleColor,
  getButtonTextColor,
  getButtonHeight,
};
