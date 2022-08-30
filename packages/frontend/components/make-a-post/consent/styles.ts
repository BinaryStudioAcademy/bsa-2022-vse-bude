import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const innerWrapper = css`
  width: 80vw;
  height: 80vh;
`;
export const consentCheckbox = ({ spaces }: Theme) => css`
  position: absolute;
  bottom: ${spaces.md};
  left: ${spaces.md};
`;

export const consentButtons = ({ spaces }: Theme) => css`
  position: absolute;
  bottom: ${spaces.md};
  right: ${spaces.md};
  display: flex;
  & > * {
    margin-left: ${spaces.md};
  }
`;
