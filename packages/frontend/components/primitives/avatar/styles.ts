import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { resetButton } from 'theme';

export const avatar = ({ radiuses }: Theme) => css`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${radiuses.circle};
  object-fit: cover;
`;

export const initials = ({ fontSizes, fontWeights, lineHeights }: Theme) => css`
  font-size: ${fontSizes.toggle};
  font-weight: ${fontWeights.toggle};
  line-height: ${lineHeights.toggle};
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
`;

export const wrapper = ({ radiuses, colors }: Theme) => css`
  ${resetButton};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${radiuses.circle};
  background-color: ${colors.primary};
  cursor: pointer;
`;
