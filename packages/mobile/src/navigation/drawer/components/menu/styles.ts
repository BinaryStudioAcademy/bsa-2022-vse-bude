import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { FontSize } from '~/common/enums/enums';

const styles = StyleSheet.create({
  link: {
    marginLeft: -20,
    color: ColorPalette.GREEN_200,
    fontWeight: '600',
    FontSize: FontSize.TEXT_14,
  },
});

export { styles };
