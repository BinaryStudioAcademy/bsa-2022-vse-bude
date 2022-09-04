import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const linkStyles = ({
  colors,
  fontSizes,
  heights,
  radiuses,
  spaces,
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
    cursor: not-allowed;
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

  &[data-variant='button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: ${heights.controlBg};
    border-radius: ${radiuses.md};
    padding: 0 ${spaces.xl2};
    background: ${colors.primaryLight};
    font-size: ${fontSizes.button};
    line-height: ${lineHeights.button};
    font-weight: ${fontWeights.button};
    color: white;

    :hover,
    :active {
      background: ${colors.primaryLightHover};
    }
  }
`;
