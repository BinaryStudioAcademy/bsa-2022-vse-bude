import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 18,
    borderRadius: 1,
  },
  imgWrapper: {
    alignSelf: 'center',
    width: '100%',
    height: 135,
    backgroundColor: ColorPalette.GRAY_100,
    borderRadius: 5,
  },
  time: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 26,
    textAlign: 'center',
    backgroundColor: ColorPalette.WHITE_100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: ColorPalette.GRAY_200,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
    color: ColorPalette.BLACK_100,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: ColorPalette.GRAY_200,
    marginVertical: 13,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: ColorPalette.BLACK_100,
  },
});

export { styles };
