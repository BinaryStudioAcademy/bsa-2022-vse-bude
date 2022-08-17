import { css } from '@emotion/react';
import { resetButton } from 'theme';
import type { Theme } from 'theme';

export const profileInfo = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  width: max-content;
  padding: ${spaces.xs} 0;
`;

export const dropdownArrow = ({
  colors,
  widths,
  heights,
  radiuses,
  spaces,
}: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${spaces.sm};
  border-radius: ${radiuses.circle};
  width: ${widths.checkbox};
  height: ${heights.checkbox};
  padding: ${spaces.xs};
  background-color: ${colors.backgroundLight};
  cursor: pointer;
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

  :last-child {
    color: ${colors.primaryLight};
  }

  & span {
    float: left;
  }

  &[data-variant='icon'] {
    padding: ${spaces.xs} ${spaces.md};
    & > i {
      float: left;
      margin-right: ${spaces.md};
    }
  }
`;
