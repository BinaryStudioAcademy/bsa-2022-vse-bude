import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { resetButton } from 'theme';

export const button = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  radiuses,
  spaces,
  heights,
}: Theme) => css`
  ${resetButton}
  display: flex;
  align-items: center;
  font-size: ${fontSizes.button};
  line-height: ${lineHeights.button};
  font-weight: ${fontWeights.button};
  cursor: pointer;

  &[data-variant='filled'] {
    background: ${colors.primaryLight};
    color: white;

    :hover,
    :active {
      background: ${colors.primaryLightHover};
    }

    :disabled {
      background: ${colors.disabled};
    }
  }

  &[data-variant='outlined'] {
    border: 1px solid ${colors.secondaryLight};
    background: white;
    color: ${colors.secondaryLight};

    :hover,
    :active {
      border: 1px solid ${colors.primaryLightHover};
      color: ${colors.primaryLightHover};
    }

    :disabled {
      border: 1px solid ${colors.disabled};
      color: ${colors.disabled};
    }
  }

  &[data-size='big'] {
    height: ${heights.controlBg};
    border-radius: ${radiuses.md};
    padding: 0 ${spaces.xl2};
  }

  &[data-size='small'] {
    height: ${heights.controlSm};
    border-radius: ${radiuses.sm};
    padding: 0 ${spaces.lg};
  }
`;
