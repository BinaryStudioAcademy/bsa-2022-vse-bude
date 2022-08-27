import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const link = ({ radiuses, colors }: Theme) => css`
  border-radius: ${radiuses.md};
  &:hover {
    background: ${colors.backgroundLight};
  }

  &[data-location='true'] {
    background: ${colors.backgroundLight};
  }
`;

export const linkContent = () => css`
  padding: 5px 18px;
`;

export const icon = ({ spaces }: Theme) => css`
  margin-right: ${spaces.md};
`;

export const activeLink = ({ colors }: Theme) => css`
  background: ${colors.backgroundLight};
`;
