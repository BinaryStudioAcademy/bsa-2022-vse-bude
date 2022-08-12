import { css } from '@emotion/react';

export const cutterWrapper = css`
  position: relative;
`;

export const cutterText = css`
  display: block;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
