import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  langBtn: {
    alignItems: 'center',
    margin: 4,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: ColorPalette.YELLOW_200,
    backgroundColor: ColorPalette.GRAY_100,
  },
});

export { styles };
