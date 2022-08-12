import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const columnHeader = ({
  fontSizes,
  lineHeights,
  colors,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.md};
  font-size: ${fontSizes.h5};
  line-height: ${lineHeights.h5};
  font-weight: ${fontWeights.h6};
  color: ${colors.textFooter};
`;

export const footerLabel = ({
  fontSizes,
  lineHeights,
  colors,
  fontWeights,
  spaces,
}: Theme) => css`
  display: block;
  margin-bottom: ${spaces.xs};
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-weight: ${fontWeights.caption};
  color: ${colors.textFooter};
`;

export const footerInput = ({
  heights,
  colors,
  spaces,
  fontSizes,
  lineHeights,
  fontWeights,
  radiuses,
  opacities,
}: Theme) => css`
  height: ${heights.controlBg};
  width: 100%;
  padding: ${spaces.md};
  border: 1px solid transparent;
  border-radius: ${radiuses.md};
  background-color: ${colors.secondaryLight};
  font-family: inherit;
  font-weight: ${fontWeights.body2};
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.textFooter};
  &::placeholder {
    opacity: ${opacities.md};
    font-family: inherit;
    color: ${colors.textFooter};
  }
  &:focus {
    outline: none;
    border: 1px solid #383b3b;
  }
`;
