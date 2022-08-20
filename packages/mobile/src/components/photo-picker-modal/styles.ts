import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { FontFamily, FontSize } from '~/common/enums/enums';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  title: {
    fontFamily: FontFamily.RALEWAY_MEDIUM,
    fontSize: FontSize.HEADING,
    color: ColorPalette.GREEN_200,
  },
  content: {
    width: '80%',
    height: 260,
    padding: 20,
    paddingBottom: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: ColorPalette.WHITE_100,
    shadowColor: ColorPalette.BLACK_100,
    shadowRadius: 10,
    borderColor: ColorPalette.GRAY_200,
    borderWidth: 1,
  },
  buttonsBlock: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  btn: {
    paddingVertical: 15,
    borderTopColor: ColorPalette.GRAY_100,
    borderTopWidth: 1,
  },
  btnText: {
    fontSize: FontSize.TEXT_20,
    fontFamily: FontFamily.RALEWAY_REGULAR,
    color: ColorPalette.GREEN_100,
  },
});

export { styles };
