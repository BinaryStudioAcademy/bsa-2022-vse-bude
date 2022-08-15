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
    marginLeft: -5,
    color: ColorPalette.BLACK_100,
    fontWeight: '800',
  },
  categories: {
    marginTop: 30,
  },
  actionHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  lotTitle: {
    color: ColorPalette.BLACK_100,
  },
  organizationTitle: {
    color: ColorPalette.WHITE_100,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#2C4340',
    minHeight: 300,
    justifyContent: 'center',
  },
  imgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export { styles };
