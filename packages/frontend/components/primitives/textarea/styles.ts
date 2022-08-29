import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const textarea = ({
  colors,
  fontSizes,
  lineHeights,
  radiuses,
  heights,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  border: ${colors.backgroundLight} 2px solid;
  border-radius: ${radiuses.md};
  box-sizing: border-box;
  width: 100%;
  min-height: ${heights.textarea};
  height: ${heights.controlBg};
  padding: 14px ${spaces.md};
  background-color: ${colors.backgroundLight};
  font-size: ${fontSizes.toggle};
  line-height: ${lineHeights.toggle};
  font-family: inherit;
  color: ${colors.text};
  resize: none;
  :focus {
    border-color: ${colors.backgroundDark};
    caret-color: ${colors.primary};
    outline: none;
  }

  ::placeholder {
    opacity: 0.2;
  }
`;

export const label = ({ colors, fontSizes, lineHeights }: Theme) => css`
  margin-bottom: 4px;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.text};

  span {
    font-size: ${fontSizes.h4};
    line-height: ${lineHeights.caption};
    color: ${colors.primary};
  }
`;

export const textareaWrapper = css`
  display: flex;
  flex-direction: column;
`;

export const bar = css`
  display: none;
`;
export const errorMessage = ({
  colors,
  fontSizes,
  lineHeights,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  margin: 2px 0 0;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  font-weight: bold;
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.error};
  & span {
    margin-right: ${spaces.xs};
  }
`;
