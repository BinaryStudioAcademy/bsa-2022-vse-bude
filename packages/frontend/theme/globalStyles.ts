import { globalCss } from '@nextui-org/react';

export const setGlobalStyles = globalCss({
  [`div[data-overlay-container='true']`]: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
});
