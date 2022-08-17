import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 13,
  },
  title: {
    lineHeight: 39,
    marginRight: 20,
    color: ColorPalette.BLACK_100,
    fontWeight: '800',
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
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  imgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export { styles };
