import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const btnWrapper = ({ spaces }: Theme) => css`
  width: fit-content;
  margin: 0 auto ${spaces.xl11};
  list-style: none;
  & li {
    display: inline-block;
  }
`;

export const btn = ({
  spaces,
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  radiuses,
}: Theme) => css`
  width: ${spaces.xl2};
  height: ${spaces.xl2};
  border: none;
  border-radius: ${radiuses.xxs};
  background-color: transparent;
  cursor: pointer;
  transition: 200ms linear;
  font-family: inherit;
  font-size: ${fontSizes.button};
  font-weight: ${fontWeights.button};
  line-height: ${lineHeights.button};
  &[data-variant='active'] {
    background-color: ${colors.backgroundLight};
  }
  & :hover {
    background-color: ${colors.backgroundLight};
  }
`;
