import { ColorPalette } from '@vse-bude/shared';

const colors = {
  primary: ColorPalette.YELLOW_100,
  primaryLight: ColorPalette.YELLOW_100,
  primaryLightHover: ColorPalette.YELLOW_200,
  extraDark: ColorPalette.BLACK,
  lightDark: ColorPalette.GRAY_700,
  secondaryLight: ColorPalette.GREEN_100,
  secondaryDark: ColorPalette.GREEN_200,
  background: ColorPalette.WHITE_100,
  white: ColorPalette.WHITE_100,
  backgroundLight: ColorPalette.GRAY_100,
  backgroundDark: ColorPalette.GRAY_200,
  text: ColorPalette.BLACK_100,
  textLight: ColorPalette.GRAY_300,
  textFooter: ColorPalette.WHITE_100,
  error: ColorPalette.RED_100,
  danger: ColorPalette.RED_100,
  active: ColorPalette.YELLOW_100,
  accent: ColorPalette.YELLOW_200,
  disabled: ColorPalette.GRAY_200,
  link: ColorPalette.YELLOW_100,
};

const darkColors = {
  background: ColorPalette.BLACK_100,
};

const fontSizes = {
  h1: '64px',
  h3: '36px',
  h4: '22px',
  h5: '18px',
  h6: '16px',
  body1: '16px',
  body2: '14px',
  body3: '12px',
  label: '14px',
  tub: '18px',
  toggle: '14px',
  button: '16px',
  buttonSmall: '12px',
  caption: '12px',
  smallButton: '15px',
  tooltip: '15px',
  cell: '18px',
};

const fontWeights = {
  h1: '800',
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
  cell: '600',
  modal: '600',
};

const lineHeights = {
  h1: '74px',
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
  cell: '21px',
  itemTitle: '19px',
  price: '19px',
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
  cardTub: '15px',
};

const heights = {
  header: '80px',
  textarea: '96px',
  checkbox: '20px',
  controlSm: '35px',
  buttonXs: '30px',
  controlBg: '45px',
  download: '40px',
  logo: '32px',
  flag: '140px',
};

const widths = {
  checkbox: '20px',
  download: '40px',
  footerFormRow: '360px',
  logo: '128px',
};

const shadows = {
  upper: '2px 5px 10px 0px #c3c3c340',
  bottom: '2px 5px 10px 0px #c3c3c340',
  dropdown:
    '-3px 0px 9px rgba(222, 222, 222, 0.25), 2px 2px 8px rgba(222, 222, 222, 0.25);',
  toast: 'rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;',
};

const borders = {
  dropdown: `2px solid ${colors.backgroundLight}`,
};

const zIndex = {
  toast: 1000,
  tooltip: 999,
  popover: 998,
  burgerOverlay: 997,
  modalWrapper: 100,
  header: 99,
};

const opacities = {
  lg: 0.2,
  md: 0.4,
  sm: 0.6,
};

const iconSizes = {
  lg: '42px',
  md: '18px',
  sm: '16px',
  xs: '14px',
};

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const mq = Object.keys(breakpoints).map(
  (bp) => `@media (min-width: ${breakpoints[bp]}px)`,
);

const maxMq = Object.keys(breakpoints).map(
  (bp) => `@media (max-width: ${breakpoints[bp]}px)`,
);

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
  iconSizes,
  borders,
  opacities,
  breakpoints,
  mq,
  maxMq,
  zIndex,
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
  iconSizes,
  borders,
  opacities,
  breakpoints,
  mq,
  maxMq,
  zIndex,
};

export { lightTheme, darkTheme };
