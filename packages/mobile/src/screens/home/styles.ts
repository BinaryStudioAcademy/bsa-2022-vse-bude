import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginVertical: 13,
  },
  title: {
    lineHeight: 39,
    marginRight: 10,
    color: ColorPalette.BLACK_100,
  },
  categories: {
    marginTop: 30,
  },
  organizationTitle: {
    color: ColorPalette.WHITE_100,
  },
  organizationsWrapper: {
    width: '100%',
    minHeight: 300,
    marginTop: 30,
    backgroundColor: ColorPalette.GREEN_200,
    paddingHorizontal: 16,
  },
  imgWrapper: {
    flexWrap: 'wrap',
  },
});

export { styles };
