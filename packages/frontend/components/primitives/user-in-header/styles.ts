import { css } from '@emotion/react';
import { resetButton } from 'theme';
import type { Theme } from 'theme';

export const userInHeader = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  width: max-content;
  padding: ${spaces.xs} 0;
`;

export const textInHeader = ({ fontWeights, spaces }: Theme) => css`
  margin: 0 ${spaces.xs} 0 ${spaces.xs};
  font-weight: ${fontWeights.tub};
`;

export const arrowInHeader = ({
  colors,
  widths,
  heights,
  radiuses,
  spaces,
}: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radiuses.circle};
  background-color: ${colors.backgroundLight};
  cursor: pointer;
  width: ${widths.checkbox};
  height: ${heights.checkbox};
  padding: ${spaces.xs};
`;

export const popoverContentWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: ${spaces.sm} 0;
`;

export const popoverContentItem = ({
  spaces,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
}: Theme) => css`
  ${resetButton}
  transition: all 0.2s ease-in-out;
  width: 100%;
  padding: ${spaces.xs} ${spaces.lg};
  cursor: pointer;
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.body1};
  color: ${colors.text};

  :hover {
    background-color: ${colors.backgroundLight};
  }

  :disabled {
    cursor: not-allowed;
    color: ${colors.disabled};
  }

  &[data-variant='icon'] {
    padding: ${spaces.xs} ${spaces.md};
    & > svg {
      margin-right: ${spaces.md};
    }
  }
`;
