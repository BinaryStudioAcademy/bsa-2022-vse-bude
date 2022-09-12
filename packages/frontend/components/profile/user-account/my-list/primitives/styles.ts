import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const itemSectionHeader = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.h4};
  line-height: ${lineHeights.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.text};
`;

export const itemImageWrapper = ({ spaces, radiuses }: Theme) => css`
  margin-right: ${spaces.md};
  margin-bottom: ${spaces.md};
  border-radius: ${radiuses.xs};
`;

export const itemImage = ({ radiuses }: Theme) => css`
  display: block;
  border-radius: ${radiuses.xs};
  width: 100px;
  height: 100px;
`;

export const itemTitle = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.sm};
  font-size: ${fontSizes.h6};
  line-height: ${lineHeights.itemTitle};
  font-weight: ${fontWeights.h6};
  color: ${colors.text};
`;

export const itemStatus = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.toggle};
  line-height: ${lineHeights.toggle};
  font-weight: ${fontWeights.toggle};
  color: ${colors.primaryLightHover};
`;

export const priceWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: ${spaces.sm};
`;

export const price = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
}: Theme) =>
  css`
    font-size: ${fontSizes.h6};
    line-height: ${lineHeights.price};
    font-weight: ${fontWeights.h6};
    color: ${colors.secondaryDark};
    &:first-of-type {
      margin-right: ${spaces.xs};
    }
  `;

export const descriptionWrapper = ({
  spaces,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
}: Theme) => css`
  margin-bottom: ${spaces.sm};
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  font-weight: ${fontWeights.body2};
  color: ${colors.text};
`;

export const buyerWrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const profileButton = ({ colors }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: none;
  padding: 0px 6px 0px 0;
  outline: none;
  background: none;
  cursor: pointer;
  &:hover {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: ${colors.backgroundLight};
  }
`;

export const term = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
}: Theme) => css`
  display: block;
  margin-right: ${spaces.sm};
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-weight: ${fontWeights.caption};
  color: ${colors.textLight};
`;

export const avatarWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const avatar = ({ radiuses }: Theme) => css`
  display: block;
  width: 26px;
  height: 26px;
  border-radius: ${radiuses.circle};
`;

export const nameWrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const name = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
}: Theme) =>
  css`
    display: block;
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    font-weight: ${fontWeights.body2};
    color: ${colors.text};
    &:first-of-type {
      margin-right: ${spaces.xs};
    }
  `;

export const dateWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${spaces.md};
  &[data-size='lg'] {
    width: 100px;
  }
`;

export const date = ({
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.body3};
  line-height: ${lineHeights.caption};
  font-weight: ${fontWeights.body2};
  color: ${colors.textLight};
`;

export const viewsWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: ${spaces.sm};
`;

export const viewsIcon = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const views = ({ fontSizes, lineHeights, fontWeights, colors }: Theme) =>
  css`
    font-size: ${fontSizes.caption};
    line-height: ${lineHeights.caption};
    font-weight: ${fontWeights.caption};
    color: ${colors.textLight};
  `;