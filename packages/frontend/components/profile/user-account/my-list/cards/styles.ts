import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const card = ({ colors, radiuses }: Theme) => css`
  border: 2px solid transparent;
  border-radius: ${radiuses.xs};
  &:hover {
    border-color: ${colors.primaryLightHover};
  }
`;

export const cardContent = ({ spaces, maxMq }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: ${spaces.md} ${spaces.lg};
  ${maxMq[4]} {
    padding: ${spaces.md} ${spaces.md};
  }
  ${maxMq[0]} {
    flex-direction: column;
  }
`;

export const leftContent = ({ maxMq }: Theme) => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  ${maxMq[0]} {
    align-items: unset;
  }
`;

export const rightContent = ({ maxMq, spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 230px;
  ${maxMq[0]} {
    margin-top: ${spaces.xs};
  }
`;

export const details = ({ colors, spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spaces.md};
  border-bottom: 2px solid ${colors.backgroundDark};
  height: 110px;
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

export const buttonWrapper = css`
  position: relative;
`;

export const publishButtonWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.sm};
`;

export const iconButton = ({ spaces }: Theme) => css`
  margin-right: ${spaces.sm};
`;
