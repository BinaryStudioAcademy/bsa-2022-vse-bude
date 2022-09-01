import { FontSize } from '~/common/enums/enums';
import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: ColorPalette.GRAY_100,
    borderRadius: 6,
    marginHorizontal: 18,
  },
  image: {
    flex: 1,
    width: Dimensions.get('screen').width - 40,
    height: 300,
    borderRadius: 6,
  },
  itemsCount: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: ColorPalette.WHITE_100,
    padding: 4.5,
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
