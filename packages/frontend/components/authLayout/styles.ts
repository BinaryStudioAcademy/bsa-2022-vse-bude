import type { Theme } from 'theme';
import { css } from '@emotion/react';

export const authSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const bgWrapper = css`
  position: relative;
  width: 56%;
  min-height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 100px;
  }
`;
export const formWrapper = ({ colors, radiuses }: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44%;
  @media screen and (max-width: 768px) {
    position: relative;
    top: -10px;
    z-index: 2;
    overflow: hidden;
    flex-grow: 1;
    order: 2;
    width: 100%;
    border-radius: ${radiuses.md} ${radiuses.md} 0 0;
    background-color: ${colors.background};
  }
`;
export const productWrapper = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 22px;
  max-width: 870px;
  width: 100%;
`;
export const productImgWrapper = css`
  position: relative;
  padding-top: 75%;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  @media screen and (max-width: 1630px) {
    bottom: -15px;
    right: -5px;
  }
  @media screen and (max-width: 992px) {
    padding: 16px;
    transform: translateX(50%);
    right: 50%;
  }
`;
export const controlsWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const logo = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl4};
  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: 0;
    text-align: center;
  }
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
  @media screen and (max-width: 992px) {
    margin-bottom: ${spaces.sm};
    ::after {
      margin-top: ${spaces.sm};
    }
  }
`;
export const price = ({ colors, fontSizes, fontWeights }: Theme) => css`
  font-family: inherit;
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.h4};
  color: ${colors.primaryLight};
`;
