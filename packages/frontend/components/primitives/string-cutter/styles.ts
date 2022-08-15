import { css } from '@emotion/react';

export const multiline = (lines: number) => css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: ${lines};
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: break-word;
`;

export const singleline = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
