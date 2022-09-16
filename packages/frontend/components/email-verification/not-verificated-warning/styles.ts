import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const textWrapper = ({ spaces }: Theme) => css`
  padding: ${spaces.xl11} ${spaces.lg};
  text-align: center;
`;

export const text = ({
  mq,
  colors,
  spaces,
  fontSizes,
  fontWeights,
}: Theme) => css`
  margin-bottom: ${spaces.xl1};
  margin-top: 0;
  font-weight: ${fontWeights.h4};
  color: ${colors.secondaryDark};
  font-size: ${fontSizes.h5};
  ${mq[2]} {
    font-size: ${fontSizes.h4};
  }
  ${mq[5]} {
    font-size: ${fontSizes.h3};
  }
`;

export const btnWrapper = css`
  margin: 0 auto;
  width: fit-content;
`;
