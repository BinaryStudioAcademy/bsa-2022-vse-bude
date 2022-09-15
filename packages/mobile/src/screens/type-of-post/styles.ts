import { StyleSheet } from 'react-native';
import { useCustomTheme, useMemo } from '~/hooks/hooks';

const useStyles = () => {
  const { dark, colors } = useCustomTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          backgroundColor: colors.background,
          padding: 20,
        },
        image: {
          width: 267,
          height: 148,
          resizeMode: 'contain',
          alignSelf: 'center',
        },
        verifyMessage: {
          flexWrap: 'wrap',
        },
        link: {
          color: colors.accent,
        },
      }),
    [dark, colors],
  );
};

export { useStyles };
