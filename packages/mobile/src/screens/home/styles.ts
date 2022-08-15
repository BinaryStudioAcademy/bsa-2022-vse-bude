import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: ColorPalette.WHITE_100,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#2C4340',
    minHeight: 300,
    justifyContent: 'center',
  },
  imgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export { styles };
