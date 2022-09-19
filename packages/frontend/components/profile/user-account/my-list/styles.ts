import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const listWrapper = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const section = ({ spaces, mq }: Theme) => css`
  margin-bottom: ${spaces.xl2};
  ${mq[4]} {
    margin-bottom: ${spaces.xl9};
  }
`;

export const header = ({ spaces, mq }: Theme) => css`
  margin-bottom: ${spaces.lg};
  ${mq[4]} {
    margin-bottom: ${spaces.xl1};
  }
`;

export const breadcrumbsContainer = ({ mq, maxMq }: Theme) => css`
  display: none;
  padding: 0;
  ${mq[1]} {
    padding: 0;
  }
  ${maxMq[3]} {
    display: block;
  }
`;

export const breadcrumbs = ({ maxMq }: Theme) => css`
  margin-top: 0;
  padding: 13px 0;
  ${maxMq[4]} {
    text-align: left;
  }
`;

export const pageNameWrapper = ({ maxMq, spaces }: Theme) => css`
  display: none;
  margin-bottom: ${spaces.lg};
  ${maxMq[3]} {
    display: block;
  }
`;

export const filterContainer = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spaces.xl};
`;

export const customPopover = css`
  z-index: auto;
`;

export const filtered = () => css``;

export const filterMenu = css`
  display: flex;
  align-items: center;
`;

export const filterIconWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const container = ({ maxMq, spaces }: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spaces.xl};
  ${maxMq[5]} {
    gap: ${spaces.md};
  }
`;
