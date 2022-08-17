import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { resetButton } from 'theme';

export const iconButton = ({ colors, radiuses }: Theme) => css`
  ${resetButton}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radiuses.circle};
  cursor: pointer;

  &[data-size='xs'] {
    height: 18px;
    width: 18px;
    & > i {
      font-size: 10px;
    }
  }
  &[data-size='sm'] {
    height: 25px;
    width: 25px;
    & > i {
      font-size: 12px;
    }
  }
  &[data-size='md'] {
    height: 36px;
    width: 36px;
    & > i {
      font-size: 18px;
    }
  }
  &[data-size='lg'] {
    height: 75px;
    width: 75px;
    & > i {
      font-size: 48px;
    }
  }
  &[data-bg-color='lightgray'] {
    background-color: ${colors.backgroundLight};
    &:hover {
      filter: contrast(0.95);
    }
    &:active {
      filter: contrast(0.9);
    }
  }
  &[data-bg-color='darkgray'] {
    background-color: ${colors.backgroundDark};
    &:hover {
      filter: contrast(0.95);
    }
    &:active {
      filter: contrast(0.9);
    }
  }
`;
