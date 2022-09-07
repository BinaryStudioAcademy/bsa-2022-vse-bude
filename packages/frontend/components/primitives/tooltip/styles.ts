import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const body = ({
  colors,
  spaces,
  radiuses,
  fontSizes,
  breakpoints,
}: Theme) => css`
  position: absolute;
  z-index: 101;
  animation: fade-in 0.15s ease-in-out;
  max-width: 30%;
  border-radius: ${radiuses.xs};
  padding: ${spaces.xs};
  background-color: ${colors.background};
  font-size: ${fontSizes.tooltip};
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${colors.background} transparent transparent transparent;
  }

  @media (max-width: ${breakpoints.md}px) {
    max-width: 50%;
  }

  @media (max-width: ${breakpoints.sm}px) {
    max-width: 70%;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
    }
  }
`;

export const fadeOut = css`
  animation: fade-out 0.1s ease-in-out;
  @keyframes fade-out {
    from {
      opacity: 1;
      scale: 1;
    }
    to {
      opacity: 0;
      transform: translateY(5px);
    }
  }
`;
