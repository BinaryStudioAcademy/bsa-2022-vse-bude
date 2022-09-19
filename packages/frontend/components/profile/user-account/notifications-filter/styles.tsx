import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const pageNameWrapper = ({ spaces }: Theme) => css`
  margin: ${spaces.sm} 0 ${spaces.lg};
`;
export const notificationsWrapper = ({ spaces }: Theme) => css`
  display: grid;
  grid-gap: ${spaces.sm};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-bottom: ${spaces.xl};
`;
export const notificationsFilter = css`
  min-height: 395px;
`;
export const noNotifications = ({
  fontSizes,
  colors,
  lineHeights,
}: Theme) => css`
  font-family: inherit;
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  color: ${colors.text};
`;
