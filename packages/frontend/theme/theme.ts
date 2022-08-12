import { ColorPalette } from '@vse-bude/shared';

const colors = {
  primary: ColorPalette.YELLOW_100,
  primaryLight: ColorPalette.YELLOW_100,
  primaryLightHover: ColorPalette.YELLOW_200,
  secondaryLight: ColorPalette.GREEN_100,
  secondaryDark: ColorPalette.GREEN_200,
  background: ColorPalette.WHITE_100,
  backgroundLight: ColorPalette.GRAY_100,
  backgroundDark: ColorPalette.GRAY_200,
  text: ColorPalette.BLACK_100,
  textLight: ColorPalette.GRAY_300,
  error: ColorPalette.RED_100,
  active: ColorPalette.YELLOW_100,
  accent: ColorPalette.YELLOW_200,
  disabled: ColorPalette.GRAY_200,
  link: ColorPalette.YELLOW_100,
};

const darkColors = {
  background: ColorPalette.BLACK_100,
};

const fontSizes = {
  h3: '36px',
  h4: '22px',
  h5: '18px',
  h6: '16px',
  body1: '16px',
  body2: '14px',
  label: '14px',
  tub: '18px',
  toggle: '14px',
  button: '16px',
  buttonSmall: '12px',
  caption: '12px',
};

const fontWeights = {
  h3: '800',
  h4: '800',
  h5: '600',
  h6: '700',
  body1: '400',
  body2: '400',
  label: '400',
  tub: '600',
  toggle: '600',
  button: '700',
  caption: '400',
};

const lineHeights = {
  h3: '41px',
  h4: '25px',
  h5: '21px',
  h6: '22px',
  body1: '22px',
  body2: '16px',
  label: '16px',
  tub: '21px',
  toggle: '16px',
  button: '19px',
  caption: '14px',
};

const spaces = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  xl1: '30px',
  xl2: '35px',
  xl3: '40px',
  xl4: '45px',
  xl5: '50px',
  xl6: '55px',
  xl7: '60px',
  xl8: '65px',
  xl9: '70px',
  xl10: '75px',
  xl11: '80px',
};

const radiuses = {
  xxs: '2px',
  xs: '5px',
  sm: '7px',
  md: '10px',
  lg: '50px',
  circle: '50%',
};

const heights = {
  header: '104px',
  checkbox: '20px',
  controlSm: '35px',
  controlBg: '45px',
};

const widths = {
  checkbox: '20px',
};

const shadows = {
  upper: '2px 5px 10px 0px #c3c3c340',
  bottom: '2px 5px 10px 0px #c3c3c340',
};

const lightTheme = {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  heights,
  widths,
  spaces,
  radiuses,
  shadows,
};

const darkTheme = {
  colors: darkColors,
  fontSizes,
  fontWeights,
  lineHeights,
  heights,
  widths,
  spaces,
  radiuses,
  shadows,
};

export { lightTheme, darkTheme };

export type Theme = typeof lightTheme;
