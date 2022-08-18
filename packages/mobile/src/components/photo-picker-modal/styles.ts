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
    height: 45,
    borderBottomColor: ColorPalette.GRAY_200,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: FontFamily.RALEWAY_MEDIUM,
    fontSize: FontSize.HEADING,
    color: ColorPalette.GREEN_200,
  },
  content: {
    width: '80%',
    height: 240,
    padding: 20,
    paddingBottom: 10,
    borderColor: ColorPalette.WHITE_100,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: ColorPalette.WHITE_100,
    shadowColor: ColorPalette.BLACK_100,
    shadowRadius: 10,
  },
  buttonsBlock: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'space-around',
  },
  firstBtn: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: ColorPalette.GRAY_100,
    borderBottomWidth: 1,
  },
  btnText: {
    fontSize: FontSize.TEXT_20,
    fontFamily: FontFamily.RALEWAY_REGULAR,
    color: ColorPalette.GREEN_100,
  },
});

export { styles };
