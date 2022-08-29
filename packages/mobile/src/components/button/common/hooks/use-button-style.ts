import { useCustomTheme, useMemo } from '~/hooks/hooks';
import {
  getButtonBackgroundColor,
  getButtonBorderColor,
  getButtonBorderWidth,
  getButtonContainerStyle,
  getButtonHeight,
  getButtonRippleColor,
  getButtonTextColor,
} from '../helpers/helpers';
import { ButtonProps } from '../types/types';

const useButtonStyle = ({
  appearance,
  disabled,
  textColor,
  buttonColor,
  compact,
}: Partial<ButtonProps>) => {
  const theme = useCustomTheme();

  return useMemo(() => {
    const containerStyle = getButtonContainerStyle({ appearance });

    const height = getButtonHeight({ compact });

    const backgroundColor = getButtonBackgroundColor({
      theme,
      appearance,
      disabled,
      buttonColor,
    });

    const borderWidth = getButtonBorderWidth({ appearance });

    const borderColor = getButtonBorderColor({
      appearance,
      buttonColor,
      disabled,
      theme,
    });

    const _textColor = getButtonTextColor({
      appearance,
      disabled,
      textColor,
      buttonColor,
      theme,
    });

    const rippleColor = getButtonRippleColor({ textColor: _textColor });

    return {
      containerStyle,
      buttonStyle: {
        backgroundColor,
        borderColor,
        borderWidth,
        height,
      },
      textStyle: { color: _textColor },
      rippleConfig: { color: rippleColor },
    };
  }, [theme, appearance, disabled, buttonColor, textColor, compact]);
};

export { useButtonStyle };
