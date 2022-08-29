import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { ColorPalette } from '@vse-bude/shared';

export const input = ({
  colors,
  fontSizes,
  lineHeights,
  radiuses,
  heights,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  border: ${colors.backgroundLight} 2px solid;
  border-radius: ${radiuses.md};
  box-sizing: border-box;
  width: 100%;
  height: ${heights.controlBg};
  padding: 14px ${spaces.md};
  background-color: ${colors.backgroundLight};
  font-size: ${fontSizes.toggle};
  line-height: ${lineHeights.toggle};
  font-family: inherit;
  color: ${colors.text};

  :focus {
    border-color: ${colors.backgroundDark};
    caret-color: ${colors.primary};
    outline: none;
  }

  ::placeholder {
    opacity: 0.2;
  }

  &[data-variant='secondary'] {
    border: ${colors.secondaryLight} 2px solid;
    background-color: ${colors.secondaryLight};
    color: ${colors.background};

    ::placeholder {
      opacity: 0.4;
      color: ${colors.background};
    }
    &:focus {
      border-color: ${colors.secondaryDark};
      caret-color: ${colors.background};
    }
  }

  &[data-status='error'] {
    color: ${colors.error};
  }
`;

export const passwordPadding = ({ spaces }: Theme) => css`
  padding: 12px 50px 12px ${spaces.md};
`;

export const error = ({ colors }: Theme) => css`
  color: ${colors.error};
`;

export const label = ({ colors, fontSizes, lineHeights }: Theme) => css`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.text};

  &[data-variant='secondary'] {
    color: ${colors.background};
  }

  span {
    font-size: ${fontSizes.h4};
    line-height: ${lineHeights.caption};
    color: ${colors.primary};
  }
`;

export const inputWrapper = () => css`
  display: flex;
  flex-direction: column;
`;

export const errorMessage = ({
  colors,
  fontSizes,
  lineHeights,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  margin: 2px 0 0;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  font-weight: bold;
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.error};
  & span {
    margin-right: ${spaces.xs};
  }
`;

export const buttonWrapper = () => css`
  position: relative;
`;

export const showBtn = () => css`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const searchWrapper = ({ radiuses, shadows }: Theme) => css`
  position: relative;
  box-shadow: ${shadows.upper};
  border-radius: ${radiuses.lg};
`;

export const searchInput = ({
  colors,
  fontSizes,
  lineHeights,
  radiuses,
  shadows,
}: Theme) => css`
  transition: 200ms linear;
  box-shadow: ${shadows.bottom};
  width: 100%;
  height: 60px;
  border: ${colors.backgroundDark} 1px solid;
  border-radius: ${radiuses.lg};
  box-sizing: border-box;
  padding: 22px 34px;
  background-color: ${colors.background};
  font-size: ${fontSizes.toggle};
  line-height: ${lineHeights.toggle};
  font-family: inherit;
  color: ${colors.text};
  ::placeholder {
    opacity: 0.3;
    color: ${colors.text};
  }
  :focus {
    outline: none;
  }
`;

export const passwordVisibilityIcon = css`
  color: ${ColorPalette.GRAY_300};
`;
export const infoIco = ({ fontSizes, spaces }: Theme) => css`
  position: absolute;
  top: 2px;
  margin-left: ${spaces.xs};
  font-size: ${fontSizes.caption} !important;
`;
export const tooltipText = ({ fontSizes, colors, lineHeights }: Theme) => css`
  max-width: 300px;
  text-align: center;
  font-family: inherit;
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  color: ${colors.secondaryLight};
`;
