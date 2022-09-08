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
  deleteButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: ColorPalette.WHITE_100,
  },
});

export { styles };
