import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: ColorPalette.YELLOW_200,
  },
  filler: {
    borderRadius: 6,
    backgroundColor: ColorPalette.YELLOW_200,
  },
});

export { styles };
