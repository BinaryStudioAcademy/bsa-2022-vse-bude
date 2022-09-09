import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  langBtn: {
    margin: 4,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: ColorPalette.YELLOW_200,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: ColorPalette.GRAY_100,
    color: ColorPalette.WHITE_100,
  },
});

export { styles };
