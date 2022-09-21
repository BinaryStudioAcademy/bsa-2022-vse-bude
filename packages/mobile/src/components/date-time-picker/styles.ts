import { StyleSheet } from 'react-native';
import { useCustomTheme, useMemo } from '~/hooks/hooks';

const useStyles = () => {
  const { dark, colors } = useCustomTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        inputIcon: {
          position: 'absolute',
          top: '50%',
          marginTop: -3,
          right: 15,
        },
        label: {
          lineHeight: 14,
          color: colors.titlePrimary,
        },
        required: {
          marginTop: -4,
        },
        input: {
          paddingVertical: 15,
          paddingLeft: 15,
          paddingRight: 30,
          borderRadius: 10,
          lineHeight: 16,
          borderWidth: 2,
          color: colors.text,
          backgroundColor: colors.backgroundElements,
          borderColor: colors.backgroundElements,
        },
        placeholder: {
          color: colors.placeholder,
          paddingVertical: 15,
          paddingLeft: 15,
          paddingRight: 30,
          borderRadius: 10,
          lineHeight: 16,
          borderWidth: 2,
          backgroundColor: colors.backgroundElements,
          borderColor: colors.backgroundElements,
        },
      }),
    [dark, colors],
  );
};

export { useStyles };
