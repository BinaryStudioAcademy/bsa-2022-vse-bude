import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { resetButton } from 'theme';

export const dropdownWrapper = () => css`
  position: relative;
`;

export const dropdownTitle = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
}: Theme) => css`
  ${resetButton};
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.body1};
  /* font-size: ${fontSizes.tub};
  line-height: ${lineHeights.tub};
  font-weight: ${fontWeights.tub}; */
  /* color: ${colors.text}; */
  color: ${colors.lightDark};

  :hover,
  :active {
    color: ${colors.extraDark};
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
  top: calc(100% + ${spaces.sm});
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  padding: ${spaces.sm} ${spaces.lg};
  cursor: pointer;
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.body1};
  color: ${colors.extraDark};
  white-space: nowrap;
  text-align: left;

  :hover {
    background-color: ${colors.backgroundLight};
  }

  :disabled {
    cursor: not-allowed;
    color: ${colors.disabled};
  }

  &[data-variant='icon'] {
    padding: ${spaces.xs} ${spaces.md};
    & > i {
      margin-right: ${spaces.md};
      width: ${spaces.md};
      text-align: center;
    }
  }
`;

export const icon = ({ colors }: Theme) => css`
  color: ${colors.extraDark};
`;
