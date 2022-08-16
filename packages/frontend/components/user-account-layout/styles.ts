import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl5};
  margin-bottom: ${spaces.xl11};
`;

export const pageContent = ({ mq }: Theme) => css`
  flex-direction: column;
  ${mq[3]} {
    flex-direction: row;
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

export const linksContainer = ({ mq }: Theme) => css`
  visibility: hidden;
  ${mq[2]} {
    visibility: visible;
    flex-direction: column;
    min-width: 190px;
  }
`;
