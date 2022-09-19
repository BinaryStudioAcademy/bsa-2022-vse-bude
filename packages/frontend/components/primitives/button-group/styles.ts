import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { resetButton } from 'theme';

export const button = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  radiuses,
  heights,
  spaces,
  maxMq,
}: Theme) => css`
  ${resetButton};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  font-weight: ${fontWeights.button};
  cursor: pointer;
  flex: 1;
  height: ${heights.buttonXs};
  min-width: 120px;
  width: fit-content;
  border-radius: ${radiuses.xxs};
  font-size: ${fontSizes.smallButton};
  transition: 200ms linear;
  white-space: nowrap;
  padding: 0 ${spaces.xs};
  box-sizing: content-box;

  ${maxMq[0]} {
    padding: ${spaces.xs};
  }

  &[data-selected='selected'] {
    border: 1px solid ${colors.primaryLight};
    background: ${colors.primaryLight};
    color: ${colors.background};

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
    border: 1px solid ${colors.backgroundDark};
    background: ${colors.background};
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

export const wrapper = ({ colors, radiuses, maxMq }: Theme) => css`
  display: flex;
  background-color: ${colors.backgroundDark};
  border-radius: ${radiuses.xxs};
  ${maxMq[0]} {
    flex-direction: column;
  }
`;
