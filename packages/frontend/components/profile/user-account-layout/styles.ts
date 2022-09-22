import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { resetButton } from 'theme';

export const wrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl5};
  margin-bottom: ${spaces.xl5};
`;

export const pageContent = ({ mq }: Theme) => css`
  flex-direction: column;
  ${mq[2]} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const pageHeader = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.xl1};
  font-size: ${fontSizes.h3};
  line-height: ${lineHeights.h3};
  font-weight: ${fontWeights.h3};
  color: ${colors.text};
`;

export const linksContainer = ({ mq, spaces }: Theme) => css`
  display: none;
  ${mq[3]} {
    display: flex;
    flex-direction: column;
    margin-right: ${spaces.xl3};
    min-width: 200px;
  }
`;

export const makePostButton = ({ colors, radiuses, spaces }: Theme) => css`
  ${resetButton}
  border: none;
  outline: none;
  border-radius: ${radiuses.md};
  background: ${colors.primary};
  cursor: pointer;
  padding: 0 6px;
  width: 100%;

  i {
    margin-right: ${spaces.md};
    width: 20px;
    transform: rotate(45deg);
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${colors.primaryLightHover};
    i {
      transform: rotate(calc(45deg + 90deg));
    }
  }

  &:disabled {
    background: ${colors.disabled};
    cursor: auto;
    &:hover {
      i {
        transform: none;
      }
    }
  }
`;

export const makePostLabel = ({
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}: Theme) => css`
  font-size: ${fontSizes.tub};
  line-height: ${lineHeights.tub};
  font-weight: ${fontWeights.tub};
  color: ${colors.text};
`;

export const makePostContent = css`
  padding: 13px 18px;
  align-items: center;
`;
