import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  wrapper: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: ColorPalette.GRAY_200,
    paddingVertical: 11,
    paddingHorizontal: 10,
  },
  bar: {
    width: 15,
    height: 2,
    backgroundColor: ColorPalette.GREEN_200,
    borderRadius: 10,
  },
  barMiddle: {
    width: 9,
  },
});

export { styles };
