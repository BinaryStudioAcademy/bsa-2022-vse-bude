import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const itemImageWrapper = ({ spaces, radiuses, maxMq }: Theme) => css`
  margin-right: ${spaces.sm};
  margin-bottom: ${spaces.md};
  border-radius: ${radiuses.xs};
  ${maxMq[0]} {
    margin-right: 0;
  }
`;

export const itemImage = ({ radiuses, maxMq }: Theme) => css`
  display: block;
  border-radius: ${radiuses.xs};
  width: 110px;
  height: 110px;
  object-fit: cover;
  ${maxMq[0]} {
    width: 100%;
  }
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
  spaces,
}: Theme) => css`
  margin-right: ${spaces.sm};
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

export const profileButton = ({ colors, radiuses }: Theme) => css`
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
    border-top-left-radius: ${radiuses.cardTub};
    border-bottom-left-radius: ${radiuses.cardTub};
    border-top-right-radius: ${radiuses.xs};
    border-bottom-right-radius: ${radiuses.xs};
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

export const avatar = ({ radiuses, spaces }: Theme) => css`
  display: block;
  width: ${spaces.xl};
  height: ${spaces.xl};
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
  margin-right: ${spaces.xs};
  margin-bottom: ${spaces.xs};
  &[data-size='lg'] {
    width: 110px;
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

export const arrow = ({ colors, radiuses, spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spaces.xs};
  border-radius: ${radiuses.circle};
  width: 15px;
  height: 15px;
  padding: ${spaces.xs};
  cursor: pointer;
  :hover {
    background-color: ${colors.backgroundDark};
  }
`;

export const tooltip = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  spaces,
  radiuses,
}: Theme) =>
  css`
    position: absolute;
    top: -30px;
    right: -20px;
    padding: ${spaces.xs};
    border: 1px solid ${colors.backgroundDark};
    border-radius: ${radiuses.xxs};
    background-color: ${colors.background};
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    font-weight: ${fontWeights.body1};
    color: ${colors.text};
  `;
