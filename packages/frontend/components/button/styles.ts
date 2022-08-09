import { styled } from '@nextui-org/react';
import { lightTheme } from 'theme/theme';

export const StyledButton = styled('button', {
  borderStyle: 'none',
  fontSize: lightTheme.fontSizes.button.value,
  lineHeight: lightTheme.lineHeights.button.value,
  fontFamily: lightTheme.fonts.sans.value,
  fontWeight: lightTheme.fontWeights.button.value,

  '&[data-variant="filled"]': {
    background: lightTheme.colors.disabled.value,
    color: '$white',
    '&:hover': {
      background: lightTheme.colors.accent.value,
    },
    '&:active': {
      background: lightTheme.colors.active.value,
    },
  },

  '&[data-variant="empty"]': {
    border: `1px solid ${lightTheme.colors.disabled.value}`,
    background: '$white',
    color: lightTheme.colors.disabled.value,
    '&:hover': {
      border: `1px solid ${lightTheme.colors.active.value}`,
      color: lightTheme.colors.active.value,
    },
    '&:active': {
      border: `1px solid ${lightTheme.colors.secondaryDark.value}`,
      color: lightTheme.colors.secondaryDark.value,
    },
  },

  '&[data-size="big"]': {
    borderRadius: lightTheme.radii.md.value,
    padding: `${lightTheme.space.md.value} ${lightTheme.space.xl2.value}`,
  },

  '&[data-size="small"]': {
    borderRadius: lightTheme.radii.sm.value,
    padding: `${lightTheme.space.sm.value} ${lightTheme.space.lg.value}`,
  },
});
