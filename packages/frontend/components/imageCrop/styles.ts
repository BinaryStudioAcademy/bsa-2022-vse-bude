import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const buttonRow = ({ breakpoints, spaces }: Theme) => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  margin-top: ${spaces.md};
  gap: ${spaces.md};

  & button {
    flex: 1 1 auto;
    width: 0;
    min-width: 130px;
  }

  @media (max-width: ${breakpoints.xs}px) {
    justify-content: center;
  }
`;

export const imageCrop = ({ radiuses }: Theme) => css`
  max-width: 800px;
  max-height: 70vh;
  border-radius: ${radiuses.xs};
`;

export const imageCropWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
