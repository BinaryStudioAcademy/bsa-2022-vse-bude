import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const linkStyles = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
}: Theme) => css`
  text-decoration: none;
  font-size: ${fontSizes.body1};
  font-weight: ${fontWeights.body1};
  line-height: ${lineHeights.body1};
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${colors.disabled};
    pointer-events: none;
  }

  &[data-variant='default'] {
    color: ${colors.extraDark};

    &:visited {
      color: ${colors.lightDark};
    }

    &:hover {
      color: ${colors.lightDark};
    }
  }

  &[data-variant='primary'] {
    color: ${colors.primaryLight};

    &:visited {
      color: ${colors.primaryLight};
    }

    &:hover {
      color: ${colors.primaryLightHover};
    }
  }

  &[data-variant='secondary'] {
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    color: ${colors.textFooter};

    &:hover {
      color: ${colors.textFooter};
    }
  }

  &[data-variant='accent'] {
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    color: ${colors.accent};

    &:hover {
      color: ${colors.accent};
    }
  }

  &[data-variant='dashboard'] {
    font-size: ${fontSizes.tub};
    font-weight: ${fontWeights.tub};
    line-height: ${lineHeights.tub};
    color: ${colors.text};
  }
`;
