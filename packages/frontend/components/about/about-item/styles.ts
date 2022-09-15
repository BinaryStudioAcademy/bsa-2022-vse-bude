import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const avatar = ({ radiuses }: Theme) => css`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${radiuses.circle};
  object-fit: cover;
  position: relative;
  left: 0;
`;

export const descriptionWrapper = ({ spaces }: Theme) => css`
text-align: center;
  margin: 0 ${spaces.md};
  height: 100%;
`;

export const nameStyle = ({ lineHeights, fontWeights }: Theme) => css`
  line-height: ${lineHeights.h3};
  font-weight: ${fontWeights.h3};
`;

export const roleStyle = ({ lineHeights, fontWeights, colors }: Theme) => css`
  line-height: ${lineHeights.h3};
  font-weight: ${fontWeights.body1};
  color: ${colors.accent};
`;

export const line = ({ spaces, colors }: Theme) => css`
  width: 100%;
  height: 3px;
  margin: ${spaces.lg} 0;
  background-color: ${colors.accent};
  &:last-child{
    height: 0;
  }
`;

export const wrapper = ({ colors, spaces }: Theme) => css`
  border: 1px solid ${colors.accent};
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${spaces.md};
  margin: ${spaces.lg} 0;
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
`;

export const itemsWrapper = ({ spaces }: Theme) => css`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${spaces.md};
  margin: ${spaces.lg} 0;
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
`;

export const itemsWrapper1 = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: ${spaces.md};
  margin: ${spaces.lg} 0;

`;

