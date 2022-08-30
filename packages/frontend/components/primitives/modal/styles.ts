import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const modalWrapper = ({ opacities }: Theme) => css`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${opacities.md});
  backdrop-filter: blur(1px);
`;

export const modalContent = ({
  shadows,
  colors,
  radiuses,
  spaces,
  borders,
}: Theme) => css`
  position: relative;
  box-shadow: ${shadows.dropdown};
  border: ${borders.dropdown};
  border-radius: ${radiuses.md};
  width: fit-content;
  height: fit-content;
  padding: ${spaces.md};
  background-color: ${colors.background};
`;
