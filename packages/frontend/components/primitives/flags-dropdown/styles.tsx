import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const dropdown = ({ spaces }: Theme) => css`
  top: 110%;
  left: -11px;
  padding: ${spaces.xs} ${spaces.xs} 0;
`;
export const imageBtn = ({ radiuses }: Theme) => css`
  object-fit: cover;
  border-radius: ${radiuses.circle};
`;
export const option = ({ radiuses, colors, spaces }: Theme) => css`
  position: relative;
  padding: 0;
  margin-bottom: ${spaces.xs};
  height: ${spaces.xl3};
  border: 2px solid ${colors.backgroundDark};
  border-radius: ${radiuses.circle};
  overflow: hidden;
  transition: 200ms linear;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    border-color: ${colors.active};
  }
  &:disabled {
    border-color: ${colors.active};
    /* display: none; */
  }
`;

export const optionImage = css`
  object-fit: cover;
`;
