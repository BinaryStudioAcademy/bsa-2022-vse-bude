import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  wrapper: {
    width: 36,
    height: 26,
  },
  flagTop: {
    flex: 1,
    backgroundColor: ColorPalette.BLUE_100,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  flagBottom: {
    flex: 1,
    backgroundColor: ColorPalette.YELLOW_100,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export { styles };
