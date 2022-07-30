import { globalCss } from '@nextui-org/react';

export const globalStyles = globalCss({
  [`div[data-overlay-container='true']`]: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
});
