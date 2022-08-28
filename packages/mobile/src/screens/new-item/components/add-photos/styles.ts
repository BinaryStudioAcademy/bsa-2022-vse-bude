import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnWrapper: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: ColorPalette.GRAY_200,
    borderRadius: 5,
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnText: {
    color: ColorPalette.GRAY_200,
  },
  icon: {
    color: ColorPalette.YELLOW_100,
    marginRight: 5,
    alignSelf: 'center',
  },
});

export { styles };
