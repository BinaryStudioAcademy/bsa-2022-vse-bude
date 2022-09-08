import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    borderRadius: 4,
    right: '-3%',
    bottom: -43,
    width: '55%',
    backgroundColor: ColorPalette.WHITE_100,
    opacity: 0.95,
    padding: 8,
  },
  image: {
    width: width * 0.9,
    height: height * 0.35,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    color: ColorPalette.BLACK_100,
  },
  divider: {
    marginVertical: 4,
    width: '95%',
    height: 2,
    borderRadius: 5,
    backgroundColor: ColorPalette.GRAY_200,
  },
  price: {
    color: ColorPalette.YELLOW_100,
  },
});
