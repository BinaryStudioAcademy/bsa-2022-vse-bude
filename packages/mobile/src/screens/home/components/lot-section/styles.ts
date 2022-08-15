import { ColorPalette } from '@vse-bude/shared';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  auctionHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  lotsWrapper: {
    marginTop: 20,
  },
  lotTitle: {
    color: ColorPalette.BLACK_100,
  },
});

export { styles };
