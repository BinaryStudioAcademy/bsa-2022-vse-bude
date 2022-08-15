import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  wrapper: {
    width: 92,
    height: 110,
    backgroundColor: ColorPalette.GRAY_100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginRight: 10,
  },
  title: {
    color: ColorPalette.BLACK_100,
  },
  image: {
    marginTop: 15,
  },
});

export { styles };
