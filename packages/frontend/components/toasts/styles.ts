import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const TRANSITION_TIMEOUT = 300;

export const toastStack = ({ zIndex, breakpoints }: Theme) => css`
  position: fixed;
  top: 0;
  right: 0;
  height: auto;
  padding: 15px 25px;
  z-index: ${zIndex.toast};
  overflow: visible;
  pointer-events: none;
  :empty {
    display: none;
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    padding: 10px;
  }
`;

export const toast = ({
  colors,
  radiuses,
  shadows,
  spaces,
  breakpoints,
}: Theme) => css`
  width: 325px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${radiuses.sm};
  padding: ${spaces.md};
  box-shadow: ${shadows.toast};
  background-color: ${colors.background};

  &:not(:last-of-type) {
    margin-bottom: ${spaces.lg};
  }

  &.toast-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  &.toast-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all ${TRANSITION_TIMEOUT}ms ease-in-out;
  }
  &.toast-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.toast-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all ${TRANSITION_TIMEOUT}ms ease-in-out;
  }
  --info-color: rgb(12, 66, 166, 0.2);
  --success-color: rgb(0, 204, 102, 0.2);
  --warning-color: rgb(255, 165, 0, 0.2);
  --error-color: rgb(232, 20, 20, 0.2);
  &[data-variant='info'] {
    i {
      background-color: var(--info-color);
    }
    border-left: 4px solid var(--info-color);
  }

  &[data-variant='warning'] {
    i {
      background-color: var(--warning-color);
    }
    border-left: 4px solid var(--warning-color);
  }

  &[data-variant='error'] {
    i {
      background-color: var(--error-color);
    }
    border-left: 4px solid var(--error-color);
  }

  &[data-variant='success'] {
    i {
      background-color: var(--success-color);
    }
    border-left: 4px solid var(--success-color);
  }

  p {
    margin: 0;
    margin-left: ${spaces.md};
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: ${radiuses.xs};
    padding: ${spaces.xs};
    opacity: 0.9;
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
`;
