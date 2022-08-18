import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 5,
    height: 40,
  },
  inputWrapper: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: ColorPalette.GRAY_100,
    paddingHorizontal: 10,
  },
  input: {
    width: 200,
    borderRadius: 5,
    overflow: 'hidden',
    padding: 10,
    fontSize: 16,
    color: ColorPalette.GRAY_300,
  },
  text: {
    fontSize: 15,
    marginRight: 50,
  },
});

export { styles };
