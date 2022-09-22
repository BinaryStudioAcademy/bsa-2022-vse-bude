import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { SPACERS } from '~/styles/spacers/spacers';

const FOOTER_HEIGHT = 60;

const styles = StyleSheet.create({
  filtersContainer: {
    paddingBottom: FOOTER_HEIGHT + SPACERS.spacer6,
  },
  footer: {
    backgroundColor: ColorPalette.WHITE_100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    height: FOOTER_HEIGHT,
  },
});

export { styles };
