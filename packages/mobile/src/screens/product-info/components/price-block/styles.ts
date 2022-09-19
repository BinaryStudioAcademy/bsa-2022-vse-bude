import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '~/common/enums/enums';

const styles = StyleSheet.create({
  currentBid: {
    paddingVertical: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footer: {
    borderTopColor: ColorPalette.GRAY_200,
    borderTopWidth: 1,
  },
  btnWidth: {
    width: 97,
  },
  maxInputWidth: {
    maxWidth: 150,
  },
  btnIcon: {
    position: 'absolute',
    top: 17.5,
    left: 14,
    zIndex: 10,
  },
  iconBorder: {
    width: 44,
    height: 44,
    backgroundColor: ColorPalette.GRAY_100,
    borderRadius: 22,
  },
  icon: {
    marginTop: 9,
    marginLeft: 9.3,
  },
  leaveBtn: {
    backgroundColor: ColorPalette.RED_100,
    borderRadius: 10,
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
  confirmBtn: {
    color: ColorPalette.YELLOW_100,
    fontFamily: FontFamily.RALEWAY_REGULAR,
  },
});

export { styles };
