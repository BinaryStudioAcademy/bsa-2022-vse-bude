import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const badge = ({
  spaces,
  fontSizes,
  fontWeights,
  lineHeights,
  radiuses,
  colors,
}: Theme) => css`
  display: flex;
  justify-content: center;
  gap: ${spaces.xs};
  padding: ${spaces.xs} ${spaces.md};
  margin: 0 ${spaces.md} 0 0;
  border: none;
  background-color: ${colors.backgroundLight};
  border-radius: ${radiuses.md};
  cursor: pointer;
  font-size: ${fontSizes.body2};
  font-family: inherit;
  font-weight: ${fontWeights.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.textLight};
  & span {
    margin-right: ${spaces.xs};
  }
`;

export const cross = (theme: Theme) => css`
  & > i {
    font-size: ${theme.fontSizes.body2} !important;
  }
`;
