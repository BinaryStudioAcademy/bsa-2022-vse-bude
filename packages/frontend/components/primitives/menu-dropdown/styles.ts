import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { resetButton } from 'theme';
import dropdown_arrow from '../../../public/images/icons/dropdown_arrow.svg';

export const dropdownTitle = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
}: Theme) => css`
  ${resetButton}
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: ${fontSizes.tub};
  line-height: ${lineHeights.tub};
  font-weight: ${fontWeights.tub};
  color: ${colors.text};

  :hover,
  :active {
    color: ${colors.primaryLight};
  }
`;

export const dropdownContent = ({
  spaces,
  shadows,
  borders,
  radiuses,
  colors,
}: Theme) => css`
  position: absolute;
  top: ${spaces.xl11};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${spaces.sm} 0;
  box-shadow: ${shadows.dropdown};
  border: ${borders.dropdown};
  border-radius: ${radiuses.xs};
  background-color: ${colors.background};
`;

export const dropdownItem = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
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
