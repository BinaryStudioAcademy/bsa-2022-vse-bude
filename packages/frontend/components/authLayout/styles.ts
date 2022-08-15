import type { Theme } from 'theme';
import { css } from '@emotion/react';

export const authSection = ({ mq }: Theme) => css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${mq[1]} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const bgWrapper = ({ mq }: Theme) => css`
  position: relative;
  flex-grow: 0;
  height: 100px;
  width: 100%;

  ${mq[1]} {
    max-width: 56%;
    min-height: 100vh;
    overflow: hidden;
    order: 2;
  }
`;
export const formWrapper = ({ mq, colors, radiuses }: Theme) => css`
  position: relative;
  top: -10px;
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  order: 1;
  width: 100%;
  border-radius: ${radiuses.md} ${radiuses.md} 0 0;
  background-color: ${colors.background};
  ${mq[1]} {
    position: static;
    width: 44%;
    border-radius: 0;
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
export const productImgWrapper = ({ mq }: Theme) => css`
  position: relative;
  padding-top: 75%;
  width: 100%;
  display: none;
  ${mq[1]} {
    display: block;
  }
`;
export const popup = ({ mq, colors, radiuses }: Theme) => css`
  position: absolute;
  transform: translateX(50%);
  right: 50%;
  bottom: -15px;
  width: 350px;
  padding: 16px;
  opacity: 0.93;
  border-radius: ${radiuses.sm};
  background-color: ${colors.background};
  ${mq[2]} {
    right: -5px;
    transform: none;
  }
  @media screen and (min-width: 1630px) {
    bottom: -77px;
    right: -36px;
    padding: 22px 23px;
  }
`;
export const controlsWrapper = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const logo = ({ mq, spaces }: Theme) => css`
  text-align: center;
  ${mq[1]} {
    text-align: left;
    margin-bottom: ${spaces.xl4};
  }
`;

export const headline = ({ colors, fontSizes, fontWeights }: Theme) => css`
  font-size: ${fontSizes.h6};
  font-weight: ${fontWeights.h6};
  font-family: inherit;
  color: ${colors.text};
`;
export const text = ({
  mq,
  colors,
  spaces,
  fontSizes,
  lineHeights,
}: Theme) => css`
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
  ${mq[2]} {
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
