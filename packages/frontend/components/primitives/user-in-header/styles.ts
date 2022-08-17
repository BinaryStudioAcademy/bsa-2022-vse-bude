import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const userInHeader = ({ spaces }: Theme) => css`
  display: flex;
  align-items: center;
  width: max-content;
  padding: ${spaces.xs} 0;
`;

export const iconInHeader = ({ radiuses, heights }: Theme) => css`
  border-radius: ${radiuses.circle};
  width: ${heights.controlSm};
  height: ${heights.controlSm};
`;

export const textInHeader = ({ fontWeights, spaces }: Theme) => css`
  margin: 0 ${spaces.xs} 0 ${spaces.xs};
  font-weight: ${fontWeights.tub};
`;

export const arrowInHeader = ({
  colors,
  widths,
  heights,
  radiuses,
  spaces,
}: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radiuses.circle};
  background-color: ${colors.backgroundLight};
  width: ${widths.checkbox};
  height: ${heights.checkbox};
  padding: ${spaces.xs};
`;
