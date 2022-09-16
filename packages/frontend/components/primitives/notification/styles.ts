import { css, type Theme } from '@emotion/react';

export const wrapper = ({ spaces, radiuses, colors }: Theme) =>
  css`
    width: 300px;
    margin-bottom: ${spaces.md};
    padding: ${spaces.sm} ${spaces.md};
    border: 1px solid ${colors.backgroundDark};
    border-radius: ${radiuses.xs};
  `;
export const titleWrapper = ({ spaces }: Theme) =>
  css`
    position: relative;
    margin: 0 0 ${spaces.sm};
  `;
export const time = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  display: block;
  text-align: right;
  font-family: inherit;
  font-size: ${fontSizes.caption};
  font-weight: ${fontWeights.caption};
  line-height: ${lineHeights.caption};
  color: ${colors.textLight};
`;
export const title = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-family: inherit;
  font-size: ${fontSizes.h6};
  font-weight: ${fontWeights.h4};
  line-height: ${lineHeights.h4};
  color: ${colors.text};
`;
export const description = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  margin: 0 0 ${spaces.sm};
  font-family: inherit;
  font-size: ${fontSizes.body2};
  font-weight: ${fontWeights.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.text};
`;
export const viewBtn = ({ spaces }: Theme) => css`
  right: -${spaces.sm};
  top: -${spaces.xs};
  position: absolute;
`;
