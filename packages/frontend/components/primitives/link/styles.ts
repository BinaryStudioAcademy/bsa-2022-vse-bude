import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const linkStyles = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
}: Theme) => css`
  color: ${colors.link};
  text-decoration: none;
  font-size: ${fontSizes.body1};
  font-weight: ${fontWeights.body1};
  line-height: ${lineHeights.body1};
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${colors.disabled};
    pointer-events: none;
  }

  &:visited {
    color: ${colors.link};
  }

  &:hover {
    color: ${colors.link};
  }

  &[data-variant='primary'] {
    color: ${colors.link};
  }

  &[data-variant='secondary'] {
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    color: ${colors.textFooter};
    &:hover {
      color: ${colors.textFooter};
    }
  }

  &[data-variant='accent'] {
    font-size: ${fontSizes.body2};
    line-height: ${lineHeights.body2};
    color: ${colors.accent};
    &:hover {
      color: ${colors.accent};
    }
  }
`;
