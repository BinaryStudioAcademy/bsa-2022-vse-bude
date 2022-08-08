import { createTheme } from '@nextui-org/react';
import { ColorPalette } from '@vse-bude/shared';

const colors = {
  primary: ColorPalette.Yellow100,
  primaryLight: ColorPalette.Yellow100,
  primaryLightHover: ColorPalette.Yellow200,
  secondaryLight: ColorPalette.Green100,
  secondaryDark: ColorPalette.Green200,
  background: ColorPalette.White100,
  backgroundLight: ColorPalette.Gray100,
  backgroundDark: ColorPalette.Gray200,
  text: ColorPalette.Black100,
  textLight: ColorPalette.Gray300,
  error: ColorPalette.Red100,
  active: ColorPalette.Yellow100,
  accent: ColorPalette.Yellow200,
  disabled: ColorPalette.Gray200,
  link: ColorPalette.Yellow100,
};

const darkColors = {
  background: ColorPalette.Black100,
}; // TODO: add dark colors

const fonts = {
  sans: "'Raleway', sans-serif",
};

const fontSizes = {
  h3: '36px',
  h4: '22px',
  h5: '18px',
  h6: '16px',
  body1: '16px',
  body2: '14px',
  tub: '18px',
  toggle: '14px',
  button: '16px',
  caption: '12px',
};

const fontWeights = {
  h3: '800',
  h4: '800',
  h5: '600',
  h6: '700',
  body1: '400',
  body2: '400',
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
  tub: '21px',
  toggle: '16px',
  button: '19px',
  caption: '14px',
};

const space = {
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

const radii = {
  xs: '5px',
  sm: '7px',
  md: '10px',
  lg: '50px',
  circle: '50%',
};

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    radii,
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: darkColors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    radii,
  },
});

export { lightTheme, darkTheme };
