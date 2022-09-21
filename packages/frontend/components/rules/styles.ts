import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const title = ({
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
}: Theme) => css`
  font-size: ${fontSizes.h3};
  font-weight: ${fontWeights.h3};
  line-height: ${lineHeights.h3};
  margin: ${spaces.xl9} 0 ${spaces.xl3};
`;
export const headline = ({
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
}: Theme) => css`
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h4};
  margin: ${spaces.xl1} 0 ${spaces.lg};
`;
export const text = ({
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
}: Theme) => css`
  font-size: ${fontSizes.body1};
  font-weight: ${fontWeights.body1};
  line-height: ${lineHeights.body1};
  margin-bottom: ${spaces.md};
  display: block;
  &::first-letter {
    text-transform: uppercase;
  }
  & span {
    font-weight: ${fontWeights.tub};
  }
`;
export const listItem = ({ spaces }: Theme) => css`
  position: relative;
  margin-bottom: ${spaces.sm};
  padding-left: ${spaces.md};
`;
export const listIcon = ({ spaces }: Theme) => css`
  position: absolute;
  top: 4px;
  left: 0;
  margin-right: ${spaces.xs};
`;
export const list = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  list-style: none;
`;
export const lastWrapper = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl10};
`;

export const updatedAt = ({
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
}: Theme) => css`
  text-align: right;
  font-size: ${fontSizes.body1};
  font-weight: ${fontWeights.body1};
  line-height: ${lineHeights.body1};
  margin: ${spaces.xl3} 0 ${spaces.md};
  & span {
    margin-left: ${spaces.xs};
    font-weight: ${fontWeights.tub};
  }
`;
