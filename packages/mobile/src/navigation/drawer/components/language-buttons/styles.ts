import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 17.5,
    borderColor: ColorPalette.YELLOW_200,
  },
  current: {
    backgroundColor: ColorPalette.YELLOW_200,
    color: ColorPalette.WHITE_100,
  },
});

export { styles };
