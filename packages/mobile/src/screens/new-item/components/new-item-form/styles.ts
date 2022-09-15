import { StyleSheet } from 'react-native';
import { useCustomTheme, useMemo } from '~/hooks/hooks';

const useStyles = () => {
  const { dark, colors } = useCustomTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        row: {
          width: '100%',
        },
        title: {
          color: colors.subtitle,
        },
        currencyField: {
          width: '30%',
        },
        textArea: {
          padding: 10,
          textAlignVertical: 'top',
        },
        buttonContainer: {
          width: 170,
        },
      }),
    [dark, colors],
  );
};

export { useStyles };
