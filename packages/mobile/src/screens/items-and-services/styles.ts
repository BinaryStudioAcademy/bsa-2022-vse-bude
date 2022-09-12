import { StyleSheet } from 'react-native';
import { ThemeColors } from '~/common/types/types';

const createStyles = (colors: ThemeColors) => {
  const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: colors.backgroundSecondary,
    },
    filterWrapper: {
      flexWrap: 'wrap',
    },
    filterContainer: {
      marginTop: 10,
      marginRight: 10,
    },
    productWrapper: {
      width: '100%',
    },
  });

  return styles;
};

export { createStyles };
