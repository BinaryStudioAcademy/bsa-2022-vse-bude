import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const form = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: ${spaces.xl11};
`;

export const sections = css`
  max-width: 670px;
  width: 100%;
`;

export const sectionRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl1};
`;

export const groupInputs = ({ spaces }: Theme) => css`
  gap: ${spaces.md};
`;

export const inputRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  flex-grow: 1;
`;

export const pageHeader = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.xl1};
  margin-top: ${spaces.xl5};
  font-size: ${fontSizes.h3};
  line-height: ${lineHeights.h3};
  font-weight: ${fontWeights.h3};
  color: ${colors.text};
  width: 100%;
  text-align: left;
`;

export const btnWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const smallInputRow = css`
  width: 130px;
`;
