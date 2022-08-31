import { FontFamily, FontSize } from '~/common/enums/enums';
import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: ColorPalette.GRAY_200,
    borderRadius: 10,
  },
  title: {
    flex: 1,
  },
  info: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
  },
  noAvatar: {
    backgroundColor: ColorPalette.BLUE_100,
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
  },
  noAvatarText: {
    fontFamily: FontFamily.RALEWAY_BOLD,
    fontSize: FontSize.TEXT_20,
    paddingTop: 6,
    textAlign: 'center',
    color: ColorPalette.WHITE_100,
  },
  link: {
    color: ColorPalette.YELLOW_200,
  },
});

export { styles };
