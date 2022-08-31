import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const TRANSITION_TIMEOUT = 300;

export const toastStack = () => css`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 30px;
  z-index: 125;
  overflow-y: auto;
`;

export const toast = ({ colors, radiuses, shadows, spaces, fontSizes, fontWeights, lineHeights }: Theme) => css`
  width: 250px;
  border-radius: ${radiuses.sm};
  padding: ${spaces.sm};
  box-shadow: ${shadows.bottom};
  background-color: ${colors.background};
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3);

  &:not(:last-of-type) {
    margin-bottom: ${spaces.lg};
  }

  &.toast-enter {
    opacity: 0;
    transform: translateX(100%)
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

  &[data-variant="info"] {
    i {
      background-color: rgb(12, 66, 166, 0.2);
    }
  }

  &[data-variant="warning"] {
    i {
      background-color: rgb(255, 184, 0, 0.2);
    }
  }

  &[data-variant="error"] {
    i {
      background-color: rgb(232, 20, 20, 0.2);
    }
  }

  &[data-variant="success"] {
    i {
      background-color: rgb(0, 204, 102, 0.2);
    }
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: ${spaces.sm};
  }

  h5 {
    margin: 0;
    margin-left: ${spaces.xs};
    font-size: ${fontSizes.h5};
    font-weight: ${fontWeights.h5};
    line-height: ${lineHeights.h5};
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: ${radiuses.xs};
    padding: ${spaces.xs};
  }

  p {
    margin: 0;
  }
`;
