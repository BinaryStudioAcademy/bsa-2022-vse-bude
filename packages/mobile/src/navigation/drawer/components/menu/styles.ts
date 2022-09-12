import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { FontSize } from '~/common/enums/enums';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    fontSize: FontSize.TEXT_20,
    fontWeight: '800',
    textAlign: 'center',
    borderBottomColor: ColorPalette.GRAY_200,
    borderBottomWidth: 1,
  },
  title: {
    marginLeft: -20,
    marginRight: 6,
    color: ColorPalette.GREEN_200,
    fontWeight: '600',
    FontSize: FontSize.TEXT_14,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 34,
    FontSize: FontSize.TEXT_14,
    color: ColorPalette.GREEN_200,
    opacity: 0.6,
  },
  label: {
    marginLeft: 17,
    marginTop: -8,
    color: ColorPalette.GREEN_200,
    fontWeight: '400',
    FontSize: FontSize.TEXT_14,
  },
  divider: {
    borderColor: ColorPalette.GRAY_200,
    marginRight: 20,
    borderWidth: 1,
  },
});

export { styles };
