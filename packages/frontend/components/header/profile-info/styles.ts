import { css } from '@emotion/react';
import { resetButton } from 'theme';
import type { Theme } from '@emotion/react';

export const profileInfo = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  width: max-content;
  padding: ${spaces.xs} 0;
  &[profile-load='true'] {
    pointer-events: none;
  }
`;

export const dropdownArrow = ({
  colors,
  widths,
  heights,
  radiuses,
  spaces,
}: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${spaces.sm};
  border-radius: ${radiuses.circle};
  width: ${widths.checkbox};
  height: ${heights.checkbox};
  padding: ${spaces.md};
  background-color: ${colors.backgroundLight};
  cursor: pointer;
  :hover {
    color: ${colors.primary} !important;
  }
`;

export const popoverContentWrapper = ({ spaces }: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: ${spaces.sm} 0;
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
  display: flex;
  align-items: center;

  i {
    width: ${spaces.lg};
  }

  :hover {
    background-color: ${colors.backgroundLight};
  }

  & span {
    float: left;
  }

  &[data-variant='icon'] {
    padding: ${spaces.xs} ${spaces.md};
    & > i {
      float: left;
      margin-right: ${spaces.md};
      color: ${colors.primaryLight};
    }
  }
  &:disabled {
    background-color: ${colors.backgroundLight};
  }
`;

export const iconsWrapper = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  margin-right: ${spaces.xs};
  & > a,
  & > button {
    margin-right: ${spaces.md};
    cursor: pointer;
  }
`;

export const newNotifications = ({ spaces, colors, radiuses }: Theme) => css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -8px;
    display: block;
    width: ${spaces.sm};
    height: ${spaces.sm};
    border-radius: ${radiuses.circle};
    background-color: ${colors.accent};
  }
`;

export const icons = css`
  line-height: 18px;
`;

export const popoverTriggerWrapper = ({ spaces }: Theme) => css`
  height: ${spaces.xl3};
`;
export const xmarkIcon = css`
  transform: rotate(45deg);
`;
export const lastLink = ({ colors }: Theme) => css`
  color: ${colors.primaryLight};
`;
