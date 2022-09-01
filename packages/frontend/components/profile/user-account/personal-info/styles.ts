import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { resetButton } from 'theme';

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

export const avatarUpdateButton = css`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const popoverContentItem = ({
  spaces,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
}: Theme) => css`
  ${resetButton}
  transition: all 0.2s ease-in-out;
  width: 100%;
  padding: ${spaces.xs} ${spaces.lg};
  cursor: pointer;
  font-size: ${fontSizes.body1};
  line-height: ${lineHeights.body1};
  font-weight: ${fontWeights.body1};
  color: ${colors.text};

  :hover {
    background-color: ${colors.backgroundLight};
  }

  & span {
    float: left;
  }

  &[data-variant='icon'] {
    padding: ${spaces.xs} ${spaces.md};
    & > i {
      display: flex;
      align-items: center;
      justify-content: center;
      float: left;
      width: ${spaces.sm};
      margin-right: ${spaces.md};
      color: ${colors.primaryLight};
    }
  }
`;

export const popoverContentWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: ${spaces.sm} 0;
`;

export const error = ({ spaces, colors, radiuses, shadows }: Theme) => css`
  position: absolute;
  width: 160px;
  left: ${spaces.sm};
  transform: translateX(80%);
  box-shadow: ${shadows.dropdown};
  border: 2px solid ${colors.error};
  color: ${colors.error};
  background-color: ${colors.background};
  padding: ${spaces.md};
  border-radius: ${radiuses.xs};
  animation: fadeIn 0.1s ease-in-out, error 0.15s ease-in-out 0.1s 3;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes error {
    0% {
      transform: translateX(80%);
    }
    50% {
      transform: translateX(77%);
    }
    100% {
      transform: translateX(80%);
    }
  }
`;
