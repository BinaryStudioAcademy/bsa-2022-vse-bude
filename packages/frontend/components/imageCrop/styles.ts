import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const buttonRow = ({ breakpoints, spaces }: Theme) => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${spaces.md};
  gap: ${spaces.md};

  @media (max-width: ${breakpoints.sm}px) {
    justify-content: space-between;
    & > button {
      width: 100%;
    }
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
