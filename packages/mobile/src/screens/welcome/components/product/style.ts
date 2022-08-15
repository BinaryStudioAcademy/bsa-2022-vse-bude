import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    borderRadius: 4,
    right: -15,
    bottom: -50,
    width: '55%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 8,
  },
  image: {
    width: 345,
    height: 240,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
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
