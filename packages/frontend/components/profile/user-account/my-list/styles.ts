import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const section = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl9};
`;

export const header = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl1};
`;

export const breadcrumbsContainer = ({ mq }: Theme) => css`
  padding: 0;
  ${mq[1]} {
    padding: 0;
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
  margin-bottom: ${spaces.xl5};
`;

export const customPopover = css`
  z-index: auto;
`;

export const filtered = () => css``;

export const filterMenu = () => css`
  display: flex;
  align-items: center;
`;

export const filterIconWrapper = ({ spaces }: Theme) => css`
  margin-right: ${spaces.xs};
`;

export const container = ({ maxMq }: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px 26px;
  ${maxMq[5]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${maxMq[3]} {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;
