import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({
  colors,
  lineHeights,
  spaces,
  fontWeights,
  breakpoints,
}: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.lg};
  h3 {
    color: ${colors.text};
    font-weight: ${fontWeights.h3};
    font-size: 2.25rem;
    line-height: ${lineHeights.h3};
    text-align: center;
  }

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    align-items: flex-start;
    h3 {
      margin-bottom: ${spaces.sm};
    }
  }
`;
