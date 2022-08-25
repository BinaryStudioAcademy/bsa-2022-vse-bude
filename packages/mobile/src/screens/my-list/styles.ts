import { StyleSheet } from 'react-native';
import { ThemeColors } from '~/common/types/types';

const createStyles = (colors: ThemeColors) => {
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: colors.background,
      padding: 20,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 15,
      alignItems: 'center',
    },
    btnText: {
      color: colors.text,
      fontWeight: '600',
      fontSize: 16,
    },
    icon: {
      color: colors.accent,
      marginRight: 18,
    },
  });

  return styles;
};
export { createStyles };
