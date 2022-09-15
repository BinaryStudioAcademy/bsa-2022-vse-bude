import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const filterWrapper = css`
  box-shadow: -3px 0px 9px rgba(222, 222, 222, 0.25),
    2px 2px 8px rgba(222, 222, 222, 0.25);
`;

export const filterComponents = ({ spaces }: Theme) => css`
  padding: ${spaces.md};
`;

export const buttonsWrapper = ({ colors, spaces, radiuses }: Theme) => css`
  margin-bottom: ${spaces.md};
  border: 1px solid ${colors.backgroundDark};
  background-color: ${colors.backgroundDark};
  border-radius: ${radiuses.xxs};
`;

export const checkboxContainer = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  &:last-of-type {
    margin-bottom: 0;
  }
`;
