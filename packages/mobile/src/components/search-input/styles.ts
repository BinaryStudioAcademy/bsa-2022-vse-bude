import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: ColorPalette.GRAY_100,
  },
  input: {
    width: '90%',
    color: ColorPalette.GRAY_300,
  },
});

export { styles };
