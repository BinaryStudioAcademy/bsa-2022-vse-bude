import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const header = ({ spaces }: Theme) => css`
  padding: 0 0 ${spaces.xl5};
`;
export const controlsWrapper = ({ mq }: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  ${mq[3]} {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;
export const categoryWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.lg};
`;
export const badgesWrapper = ({ spaces, mq }: Theme) => css`
  flex: 1;
  overflow: hidden;
  margin: 0 0 ${spaces.xl};
  width: 95%;
  ${mq[3]} {
    width: 100%;
    margin: 0 ${spaces.xl} 0 0;
  }
`;

export const headline = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  mq,
}: Theme) => css`
  font-size: ${fontSizes.h4};
  margin-bottom: ${spaces.md};
  font-family: inherit;
  font-weight: ${fontWeights.h3};
  line-height: ${lineHeights.h3};
  color: ${colors.secondaryDark};
  text-align: center;
  ${mq[4]} {
    text-align: left;
    font-size: ${fontSizes.h3};
  }
`;
export const controllersWrapper = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-bottom: ${spaces.lg};
`;
export const sortBySelect = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;
export const dropdown = css`
  top: 100%;
  z-index: 2;
  width: fit-content;
`;
