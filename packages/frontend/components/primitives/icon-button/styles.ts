import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { resetButton } from 'theme';

export const iconButton = ({ colors, spaces }: Theme) => css`
  ${resetButton}

  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }

  &[data-variant='label'] {
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      margin-right: ${spaces.sm};
    }
  }
`;
