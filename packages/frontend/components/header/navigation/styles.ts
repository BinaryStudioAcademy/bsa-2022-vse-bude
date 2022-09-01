import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ spaces, colors }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spaces.lg};
  margin: 0 ${spaces.xl};
  a,
  & > div > button {
    color: ${colors.extraDark} !important;
    &:hover {
      color: ${colors.lightDark} !important;
      i {
        color: ${colors.primary} !important;
      }
    }
  }
`;

export const link = ({ colors }: Theme) => css`
  color: ${colors.primary};
`;
