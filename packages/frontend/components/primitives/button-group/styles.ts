import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { resetButton } from 'theme';

export const button = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  radiuses,
  spaces,
  heights,
  mq,
}: Theme) => css`
  ${resetButton};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.button};
  line-height: ${lineHeights.button};
  font-weight: ${fontWeights.button};
  cursor: pointer;
  flex: 1;

  height: ${heights.controlSm};
  border-radius: ${radiuses.sm};
  padding: 0 ${spaces.md};
  font-size: ${fontSizes.smallButton};
  ${mq[0]} {
    height: ${heights.controlBg};
    border-radius: ${radiuses.md};
    padding: 0 ${spaces.xl2};
  }

  &[data-selected='selected'] {
    background: ${colors.primaryLight};
    color: white;

    :hover,
    :active {
      background: ${colors.primaryLightHover};
    }

    :disabled {
      background: ${colors.disabled};
      pointer-events: none;
    }
  }

  &[data-selected='default'] {
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
      pointer-events: none;
    }
  }
`;

export const wrapper = css`
  display: flex;
`;
