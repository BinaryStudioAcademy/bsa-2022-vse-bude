import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const footerForm = ({ widths }: Theme) => css`
  display: flex;
  flex-direction: column;
  width: ${widths.footerFormRow};
`;

export const footerFormDescription = ({
  spaces,
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
  opacities,
}: Theme) => css`
  opacity: ${opacities.sm};
  display: block;
  padding-bottom: ${spaces.sm};
  font-weight: ${fontWeights.caption};
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.textFooter};
`;

export const footerFormRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.sm};
`;
