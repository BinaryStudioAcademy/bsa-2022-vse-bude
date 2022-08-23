import type { Theme } from '@emotion/react';
import { css, keyframes } from '@emotion/react';

const extraSmall = 24;
const smallSize = 32;
const bigSize = 64;
const largeSize = 128;

export const loaderAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const loader = ({ colors }: Theme) => css`
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 2px solid ${colors.text};
  animation: ${loaderAnim} 1.2s linear infinite;

  &[data-size='extraSmall'] {
    width: ${extraSmall}px;
    height: ${extraSmall}px;
  }

  &[data-size='small'] {
    width: ${smallSize}px;
    height: ${smallSize}px;
  }

  &[data-size='big'] {
    width: ${bigSize}px;
    height: ${bigSize}px;
  }

  &[data-size='large'] {
    width: ${largeSize}px;
    height: ${largeSize}px;
  }
`;
