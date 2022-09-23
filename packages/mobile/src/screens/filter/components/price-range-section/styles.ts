import { StyleSheet } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { ThemeColors } from '~/common/types/types';
import { FontFamily } from '~/common/enums/enums';
import { SPACERS } from '~/styles/spacers/spacers';

const createStyles = (colors: ThemeColors) => {
  const styles = StyleSheet.create({
    sliderMarker: {
      height: SPACERS.spacer6,
      width: SPACERS.spacer6,
      borderRadius: 50,
      backgroundColor: colors.primary,
    },
    divider: {
      width: 25,
      paddingHorizontal: 8,
    },
    selectedSlider: {
      backgroundColor: ColorPalette.YELLOW_200,
    },
    trackSlider: {
      backgroundColor: colors.placeholderLight,
    },
    input: {
      flex: 1,
      height: 46,
      fontFamily: FontFamily.RALEWAY_REGULAR,
      fontSize: 16,
      color: colors.text,
      backgroundColor: colors.backgroundElements,
      justifyContent: 'center',
      borderRadius: 10,
      paddingHorizontal: 16,
    },
  });

  return styles;
};

export { createStyles };
