import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { resetButton } from 'theme';

const hoverColor = `rgb(232,232,232)`;

const hover = css`
  &:hover {
    background: ${hoverColor};
    filter: contrast(1.05);
  }
`;

const active = css`
  &:active {
    background-color: ${hoverColor};
    filter: contrast(1.1);
  }
`;

export const iconButton = ({ colors, radiuses }: Theme) => css`
  ${resetButton}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radiuses.circle};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

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
    ${hover}
    ${active}
  }
  &[data-bg-color='darkgray'] {
    background-color: ${colors.backgroundDark};
    ${hover}
    ${active}
  }
  &[data-bg-color='transparent'] {
    background-color: transparent;
    ${hover}
    ${active}
  }

  :disabled {
    pointer-events: none;

    i {
      color: ${colors.disabled}!important;
    }
  }
`;
