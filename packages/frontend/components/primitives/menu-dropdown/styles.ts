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
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  font-size: ${fontSizes.tub};
  line-height: ${lineHeights.tub};
  font-weight: ${fontWeights.tub};
  cursor: pointer;

  color: ${colors.text};

  :hover,
  :active {
    color: ${colors.primaryLight};
  }

  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 8px;
    margin-left: 6px;
    background-repeat: no-repeat;
    background-color: ${colors.primaryLight};
    mask-image: url(${dropdown_arrow.src});
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
  background-color: ${colors.background};
  top: ${spaces.xl11};
  padding: ${spaces.sm} 0;
  box-shadow: ${shadows.dropdown};
  border: ${borders.dropdown};
  border-radius: ${radiuses.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const dropdownItem = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  ${resetButton}
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.body1};
  color: ${colors.text};
  width: 100%;
  padding: ${spaces.xs} ${spaces.lg};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: ${colors.backgroundLight};
  }
  :disabled {
    cursor: not-allowed;
    color: ${colors.disabled};
  }
`;
