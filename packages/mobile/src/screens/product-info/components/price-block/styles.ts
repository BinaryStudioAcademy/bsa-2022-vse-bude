import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

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
  minBid: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: ColorPalette.GRAY_100,
    borderRadius: 7,
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
    marginTop: 7,
    marginLeft: 8,
  },
});

export { styles };
