import { StyleSheet, Dimensions } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { ThemeColors } from '~/common/types/types';

const { width } = Dimensions.get('window');

const createStyles = (colors: ThemeColors) => {
  const styles = StyleSheet.create({
    sliderMarker: {
      height: 15,
      width: 15,
      borderRadius: 50,
      backgroundColor: colors.placeholderLight,
    },
    divider: {
      width: 25,
      paddingHorizontal: 5,
    },
    pressedSliderMarker: {
      height: 20,
      width: 20,
      borderRadius: 20,
    },
    selectedSlider: {
      backgroundColor: ColorPalette.YELLOW_200,
    },
    trackSlider: {
      backgroundColor: colors.placeholderLight,
    },
    sliderWidth: {
      width: width * 0.9,
    },
    input: {
      width: '33%',
      height: 35,
      backgroundColor: colors.placeholderLight,
      justifyContent: 'center',
      fontSize: 14,
      borderRadius: 2,
      paddingHorizontal: 10,
      ...globalStyles.fontWeightRegular,
    },
  });

  return styles;
};

export { createStyles };
