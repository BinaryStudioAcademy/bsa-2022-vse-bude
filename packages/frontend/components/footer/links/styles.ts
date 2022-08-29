import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const footerLinksWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-right: ${spaces.xl4};
`;

export const footerLinksRow = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spaces.md};
`;

export const phone = ({ iconSizes }: Theme) => css`
  display: block;
  margin-right: 12px;
  width: ${iconSizes.md};
  height: ${iconSizes.md};
`;

export const email = ({ iconSizes }: Theme) => css`
  display: block;
  margin-right: 12px;
  width: ${iconSizes.md};
  height: ${iconSizes.md};
`;

export const shield = ({ iconSizes }: Theme) => css`
  display: block;
  margin-right: 12px;
  width: ${iconSizes.md};
  height: ${iconSizes.md};
`;

export const primaryUnderline = ({ colors }: Theme) => css`
  border-bottom: 1px solid ${colors.accent};
`;
