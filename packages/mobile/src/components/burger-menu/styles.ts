import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: ColorPalette.GRAY_100,
    width: 36,
    height: 36,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  bar: {
    width: 15,
    height: 2,
    borderRadius: 5,
    backgroundColor: ColorPalette.BLACK_100,
  },
  barMiddle: {
    width: 10,
  },
});

export { styles };
