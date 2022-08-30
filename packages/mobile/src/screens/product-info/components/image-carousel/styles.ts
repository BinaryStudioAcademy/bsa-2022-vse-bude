import { FontSize } from '~/common/enums/enums';
import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: ColorPalette.GRAY_100,
    borderRadius: 6,
    marginHorizontal: 18,
  },
  itemsCount: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  currentItem: {
    color: ColorPalette.YELLOW_200,
    fontSize: FontSize.TEXT_14,
  },
  totalItems: {
    color: ColorPalette.GRAY_300,
    fontSize: FontSize.TEXT_14,
  },
});

export { styles };
