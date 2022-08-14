import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl5};
  margin-bottom: ${spaces.xl11};
`;

export const pageContent = () => css`
  @media (max-width: 1200px) {
    flex-direction: column;
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

export const linksContainer = () => css`
  flex-direction: column;
  width: 190px;
  @media (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const link = ({ radiuses, colors }: Theme) => css`
  border-radius: ${radiuses.md};
  &:hover {
    background: ${colors.backgroundLight};
  }
`;

export const linkContent = () => css`
  padding: 13px 18px;
`;

export const icon = ({ spaces }: Theme) => css`
  margin-right: ${spaces.md};
`;

export const activeLink = ({ colors }: Theme) => css`
  background: ${colors.backgroundLight};
`;
