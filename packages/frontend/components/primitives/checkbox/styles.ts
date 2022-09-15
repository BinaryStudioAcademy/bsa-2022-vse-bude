import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import checkmark from '../../../public/images/icons/checkmark.svg';

export const label = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
}: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: ${fontWeights.label};
  font-size: ${fontSizes.label};
  line-height: ${lineHeights.label};
  color: ${colors.text};
  cursor: pointer;
`;

export const checkbox = ({
  colors,
  heights,
  widths,
  radiuses,
  spaces,
}: Theme) => css`
  position: relative;
  appearance: none;
  margin-right: ${spaces.md};
  height: ${heights.checkbox};
  width: ${widths.checkbox};
  border: 1px solid ${colors.primaryLight};
  border-radius: ${radiuses.xxs};
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${colors.primaryLight};
    &::after {
      content: '';
      position: absolute;
      top: calc(50% - 5px);
      left: calc(50% - 5px);
      display: block;
      width: 10px;
      height: 8px;
      background-image: url(${checkmark.src});
    }
  }
`;
