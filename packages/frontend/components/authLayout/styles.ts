import type { Theme } from 'theme';
import { css } from '@emotion/react';

export const authSection = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;
export const bgWrapper = () => css`
  position: relative;
  width: 56%;
  height: 100%;
  overflow: hidden;
`;
export const formWrapper = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44%;
`;
export const productWrapper = () => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 22px;
  max-width: 870px;
  width: 100%;
`;
export const productImgWrapper = () => css`
  position: relative;
  padding-top: 75%;
  width: 100%;
`;
export const popup = ({ colors, radiuses }: Theme) => css`
  position: absolute;
  bottom: -77px;
  right: -36px;
  width: 350px;
  border-radius: ${radiuses.sm};
  background-color: ${colors.background};
  padding: 22px 23px;
  opacity: 0.93;
`;
export const controlsWrapper = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const logo = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl4};
`;

export const headline = ({ colors, fontSizes, fontWeights }: Theme) => css`
  font-size: ${fontSizes.h6};
  font-weight: ${fontWeights.h6};
  font-family: inherit;
  color: ${colors.text};
`;
export const text = ({ colors, spaces, fontSizes, lineHeights }: Theme) => css`
  margin-bottom: ${spaces.md};
  line-height: ${lineHeights.body2};
  font-size: ${fontSizes.body2};
  color: ${colors.text};
  font-family: inherit;
  ::after {
    content: '';
    display: block;
    margin-top: ${spaces.md};
    width: 100%;
    height: 2px;
    background-color: ${colors.backgroundDark};
  }
`;
export const price = ({ colors, fontSizes, fontWeights }: Theme) => css`
  font-family: inherit;
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.primaryLight};
`;
