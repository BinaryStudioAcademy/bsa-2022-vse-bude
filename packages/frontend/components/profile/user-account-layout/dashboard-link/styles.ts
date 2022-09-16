import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const link = ({ radiuses, colors }: Theme) => css`
  border: none;
  outline: none;
  border-radius: ${radiuses.md};
  background: none;
  cursor: pointer;
  &:hover {
    background: ${colors.backgroundLight};
  }

  &[data-location='true'] {
    background: ${colors.backgroundLight};
  }
`;

export const linkContent = () => css`
  padding: 13px 15px;
  align-items: center;
`;

export const icon = ({ spaces }: Theme) => css`
  margin-right: ${spaces.md};
  width: 20px;
`;

export const activeLink = ({ colors }: Theme) => css`
  background: ${colors.backgroundLight};
`;

export const label = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.tub};
  line-height: ${lineHeights.tub};
  font-weight: ${fontWeights.tub};
  color: ${colors.text};
`;
