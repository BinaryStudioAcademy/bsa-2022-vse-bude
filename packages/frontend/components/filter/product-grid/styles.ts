import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const productGridWrapper = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: ${spaces.xl3};
`;

export const productGrid = ({ spaces }: Theme) => css`
  flex: 1;
  display: grid;
  grid-gap: ${spaces.sm};
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

  & li {
    list-style: none;
  }
`;

export const headline = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.h4};
  margin: 0 auto ${spaces.md};
  font-family: inherit;
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h4};
  color: ${colors.secondaryDark};
  text-align: center;
`;
