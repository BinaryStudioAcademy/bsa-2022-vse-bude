import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const avatar = ({ radiuses }: Theme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: ${radiuses.circle};
  object-fit: cover;
`;

export const descriptionWrapper = ({ spaces }: Theme) => css`
  margin: 0 ${spaces.md};
  height: 100%;
  text-align: center;
`;

export const nameStyle = ({ lineHeights, fontWeights }: Theme) => css`
  line-height: ${lineHeights.h3};
  font-weight: ${fontWeights.h3};
`;

export const roleStyle = ({
  lineHeights,
  fontWeights,
  colors,
  fontSizes,
}: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.h4};
  font-weight: ${fontWeights.body1};
  color: ${colors.accent};
`;

export const line = ({ spaces, colors }: Theme) => css`
  margin: ${spaces.lg} 0;
  width: 100%;
  height: 3px;
  background-color: ${colors.accent};
  &:last-child {
    height: 0;
  }
`;

export const itemsWrapper = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  margin: ${spaces.lg} 0;
  max-width: 250px;
  padding: ${spaces.md};
`;
