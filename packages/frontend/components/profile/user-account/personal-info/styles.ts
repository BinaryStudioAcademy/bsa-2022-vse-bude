import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { resetButton } from 'theme';
import { ColorPalette } from '@vse-bude/shared';

export const form = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const personalHeader = css`
  width: 100%;
`;

export const headerWrapper = ({ spaces }: Theme) => css`
  position: relative;
  margin-bottom: ${spaces.sm};
`;

export const flagWrapper = ({ radiuses }: Theme) => css`
  border-radius: ${radiuses.md};
  overflow: hidden;
`;

export const flag = ({ heights, radiuses }: Theme) => css`
  display: block;
  height: ${heights.flag};
  width: 100%;
  background: linear-gradient(
    ${ColorPalette.BLUE} 50%,
    ${ColorPalette.YELLOW} 50%
  );
  filter: blur(20px);
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
  margin-top: ${spaces.xl};
  gap: ${spaces.sm};
`;

export const marginBottom = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl11};
`;

export const sections = ({ mq, maxMq }: Theme) => css`
  width: 450px;
  ${mq[1]} {
    width: 500px;
  }
  ${mq[4]} {
    width: 700px;
  }
  ${maxMq[0]} {
    width: 100%;
  }
`;

export const sectionRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl1};
  &:first-of-type {
    margin-bottom: 0;
  }
`;

export const groupInputs = ({ spaces, maxMq }: Theme) => css`
  gap: ${spaces.md};
  ${maxMq[0]} {
    flex-direction: column;
    gap: 0;
  }
`;

export const inputRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  flex-grow: 1;
`;

export const groupPhone = ({ spaces }: Theme) => css`
  gap: ${spaces.md};
  padding: 0 0 ${spaces.xl1} 0;
`;

export const groupEmail = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  gap: ${spaces.md};
`;

export const phoneRow = css`
  flex-grow: 2;
`;

export const verifyButtonWrapper = ({ spaces }: Theme) => css`
  padding: 18px 0 ${spaces.xl1} 0;
`;
export const verifyEmailButtonWrapper = css`
  padding: 18px 0;
`;
export const avatarPopoverTrigger = css`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const bodyWrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xs};
  z-index: 0;
`;

export const avatarUpdateButton = ({ colors, spaces, radiuses }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  width: ${spaces.xl2};
  height: ${spaces.xl2};
  border-radius: ${radiuses.circle};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.backgroundDark};
  }
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

export const popoverContentWrapper = ({ spaces, shadows }: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: ${spaces.sm} 0;
  box-shadow: ${shadows.bottom};
`;
