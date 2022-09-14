import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    backgroundColor: ColorPalette.GRAY_100,
  },
  text: {
    paddingRight: 6,
  },
});

export { styles };
