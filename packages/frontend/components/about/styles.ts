import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

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
