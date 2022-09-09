import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const header = ({ spaces }: Theme) => css`
  padding: 0 0 ${spaces.xl5};
`;
export const controlsWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const categoryWrapper = css`
  margin-right: 20px;
`;
export const badgesWrapper = ({ spaces }: Theme) => css`
  flex: 1;
  overflow: hidden;
  margin-right: ${spaces.xl};
`;

export const headline = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.h3};
  margin-bottom: ${spaces.md};
  font-family: inherit;
  font-weight: ${fontWeights.h3};
  line-height: ${lineHeights.h3};
  color: ${colors.secondaryDark};
`;
export const controllersWrapper = css`
position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const iconWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 28px;
`;
export const downIcon = ({ colors }: Theme) => css`
  color: ${colors.backgroundDark};
  font-size: 10px !important;
`;
export const crossIcon = css`
  position: relative;
  left: 3px;
`;

export const btn = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
  radiuses,
  colors,
}: Theme) => css`
  padding: ${spaces.xs} ${spaces.md};
  margin: 0 ${spaces.md} ${spaces.md} 0;
  border: none;
  background-color: ${colors.backgroundLight};
  border-radius: ${radiuses.md};
  cursor: pointer;
  font-size: ${fontSizes.body2};
  font-family: inherit;
  font-weight: ${fontWeights.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.textLight};
  & span {
    margin-right: ${spaces.xs};
  }
`;
export const popoverWrapper = css`
  z-index: 10;
`;
export const popover = ({ spaces }: Theme) => css`
  padding: ${spaces.md};
  width: 296px;
  z-index: 1;
`;
export const popoverDivider = ({ colors, spaces }: Theme) => css`
margin: ${spaces.lg} 0;
  height: 2px;
  background-color: ${colors.backgroundDark};
`;
export const popoverHeadline = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  margin-bottom: ${spaces.md};
  font-family: inherit;
  font-size: ${fontSizes.label};
  font-weight: ${fontWeights.tub};
  line-height: ${lineHeights.label};
  color: ${colors.text};
`;
export const price = ({ spaces }: Theme) => css`
  gap: ${spaces.md};
`;
export const sortBySelect = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;
