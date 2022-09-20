import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const notificationsWrapper = ({ spaces }: Theme) => css`
  min-width: 320px;
  max-height: calc(100vh - ${spaces.xl11});
  padding: ${spaces.sm};
  overflow: auto;
`;
export const notificationWrapper = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;
export const noNotifications = ({
  fontSizes,
  colors,
  lineHeights,
}: Theme) => css`
  text-align: center;
  font-family: inherit;
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  color: ${colors.text};
`;
