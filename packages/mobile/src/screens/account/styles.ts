import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: ColorPalette.GREEN_200,
    padding: 20,
  },
  headerContent: {
    paddingTop: 50,
    paddingBottom: 35,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  btnText: {
    color: ColorPalette.WHITE_100,
    fontWeight: '600',
    fontSize: 16,
  },
  icon: {
    color: ColorPalette.YELLOW_100,
    //width: 20,
    marginRight: 18,
  },
  btnWrapper: {
    paddingVertical: 15,
  },
  logOutWrapper: {
    borderTopColor: ColorPalette.GREEN_100,
    borderTopWidth: 2,
    paddingVertical: 15,
  },
  accentColor: {
    color: ColorPalette.YELLOW_100,
  },
});

export { styles };
