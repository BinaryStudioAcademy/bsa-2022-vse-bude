import { css } from '@emotion/react';
import { ColorPalette } from '@vse-bude/shared';

export const favoriteIcon = () => css`
  background: ${ColorPalette.GRAY_200};
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 15px;
  &:hover {
    cursor: pointer;
  }
`;
