import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const card = ({ colors, radiuses }: Theme) => css`
  border: 2px solid transparent;
  border-radius: ${radiuses.xs};
  &:hover {
    border-color: ${colors.primaryLightHover};
  }
`;

export const cardContent = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: ${spaces.lg} ${spaces.xl};
`;

export const leftContent = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

export const rightContent = css`
  display: flex;
  flex-direction: column;
  width: 215px;
`;

export const details = ({ colors, spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaces.md};
  border-bottom: 2px solid ${colors.backgroundDark};
  height: 100px;
`;

export const saleDetails = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: ${spaces.sm};
`;

export const postedFooter = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const editDate = ({
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

export const publishButtonWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.sm};
`;