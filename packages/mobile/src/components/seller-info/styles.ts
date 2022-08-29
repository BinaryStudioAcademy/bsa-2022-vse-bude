import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: ColorPalette.GRAY_200,
    borderRadius: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
  },
});

export { styles };
