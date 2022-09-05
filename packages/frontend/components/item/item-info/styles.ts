import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const wrapper = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  flex: 1;
`;

export const table = ({ spaces, colors, radiuses, breakpoints }: Theme) => css`
  table-layout: fixed;
  max-width: 90%;
  td {
    vertical-align: top;
    overflow-wrap: break-word;
    &:first-of-type {
      max-width: 100%;
      white-space: nowrap;
      position: relative;
      border-right: ${spaces.sm} solid transparent;
      border-bottom: ${spaces.sm} solid transparent;
      padding-left: ${spaces.sm};
      color: ${colors.textLight};
      &:before {
        content: '';
        display: block;
        width: ${spaces.xs};
        height: ${spaces.xs};
        border-radius: ${radiuses.circle};
        background-color: ${colors.accent};
        position: absolute;
        left: 0;
        top: 7px;
      }
    }
  }

  @media (max-width: ${breakpoints.lg}px) {
    max-width: 100%;
  }
`;
