import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  wrapper: {
    width: 92,
    backgroundColor: ColorPalette.GRAY_100,
    borderRadius: 5,
  },
  title: {
    height: 50,
    color: ColorPalette.BLACK_100,
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export { styles };
