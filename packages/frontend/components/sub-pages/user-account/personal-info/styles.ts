import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const form = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const personalHeader = () => css`
  width: 100%;
  margin-bottom: 7px;
`;

export const headerWrapper = ({ spaces }: Theme) => css`
  position: relative;
  margin-bottom: ${spaces.sm};
`;

export const flagWrapper = ({ radiuses }: Theme) => css`
  border-radius: ${radiuses.md};
`;

export const flag = ({ heights, radiuses }: Theme) => css`
  display: block;
  height: ${heights.flag};
  width: 100%;
  border-radius: ${radiuses.md};
`;

export const avatarWrapper = ({ colors, radiuses }: Theme) => css`
  position: absolute;
  top: 66px;
  left: 3%;
  width: 130px;
  height: 130px;
  border-radius: ${radiuses.circle};
  border: 2px solid ${colors.backgroundLight};
`;

export const avatar = ({ radiuses }: Theme) => css`
  display: block;
  border-radius: ${radiuses.circle};
`;

export const buttons = ({ spaces }: Theme) => css`
  gap: ${spaces.sm};
`;

export const sections = ({ mq }: Theme) => css`
  width: 450px;
  ${mq[0]} {
    width: 500px;
  }
  ${mq[3]} {
    width: 700px;
  }
`;

export const sectionRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl1};
`;

export const groupInputs = ({ spaces }: Theme) => css`
  gap: ${spaces.md};
`;

export const inputRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  flex-grow: 1;
`;
