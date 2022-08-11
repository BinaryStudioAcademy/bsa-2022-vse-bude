import { ColorPalette } from '@vse-bude/shared';
import { css } from '@emotion/react';
import type { Theme } from '../../../theme';

export const productFooter = () => css`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const productHeader = () => css`
  position: relative;
  margin-bottom: 20px;
`;

export const productName = ({ fontWeights, fontSizes }: Theme) => css`
  color: ${ColorPalette.BLACK_100};
  font-weight: ${fontWeights.h6};
  font-size: ${fontSizes.h6};
  margin-bottom: 5px;
`;

export const productDescription = ({
  colors,
  fontSizes,
  fontWeights,
}: Theme) => css`
  color: ${colors.text};
  font-size: ${fontSizes.body2};
  font-weight: ${fontWeights.body2};
  word-break: break-all;
  margin-bottom: 15px;
`;

export const divider = ({ colors }: Theme) => css`
  border: 1px solid ${colors.disabled};
`;

export const productTimer = () => css`
  position: absolute;
  bottom: -10px;
  left: 17%;
`;

export const productCard = () => css`
  width: 300px;
  border: 1px solid lightgray;
  padding: 22px 25px;
  border-radius: 5px;
`;
