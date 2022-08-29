import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const form = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const personalHeader = () => css`
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  top: 66px;
  left: 3%;
  border-radius: ${radiuses.circle};
  border: 2px solid ${colors.backgroundLight};
  width: 130px;
  height: 130px;
  background: ${colors.backgroundDark};
`;

export const actionWrapper = ({ mq, spaces }: Theme) => css`
  width: 100%;
  margin-bottom: ${spaces.lg};
  ${mq[0]} {
    margin-bottom: ${spaces.md};
  }
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

export const groupeInputs = ({ spaces }: Theme) => css`
  gap: ${spaces.md};
`;

export const inputRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  flex-grow: 1;
`;

export const groupePhone = ({ spaces }: Theme) => css`
  gap: ${spaces.md};
  align-items: flex-end;
`;

export const phoneRow = () => css`
  flex-grow: 2;
`;
