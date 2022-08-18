import { StyleSheet } from 'react-native';
import { ThemeColors } from '~/common/types/types';

const createStyles = (colors: ThemeColors) => {
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: colors.background,
      padding: 20,
    },
    headerContent: {
      paddingTop: 50,
      paddingBottom: 35,
      alignItems: 'center',
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
    btnWrapper: {
      paddingVertical: 15,
    },
    logOutWrapper: {
      borderTopColor: colors.backgroundSecondary,
      borderTopWidth: 2,
      paddingVertical: 15,
    },
    accentColor: {
      color: colors.accent,
    },
  });

  return styles;
};
export { createStyles };
