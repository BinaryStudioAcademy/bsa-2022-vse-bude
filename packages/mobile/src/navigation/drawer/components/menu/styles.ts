import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { FontSize } from '~/common/enums/enums';

const styles = StyleSheet.create({
  label: {
    marginTop: -8,
    color: ColorPalette.GREEN_200,
    fontWeight: '400',
    FontSize: FontSize.TEXT_14,
  },
  categoryItem: {
    marginBottom: 0,
    marginTop: 0,
  },
});

export { styles };
