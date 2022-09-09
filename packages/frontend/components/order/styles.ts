import { type Theme, css } from '@emotion/react';

export const checkout = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
}: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.text};
  font-size: ${fontSizes.body1};
  font-weight: ${fontWeights.body1};
  line-height: ${lineHeights.body1};
  max-width: 500px;

  table {
    width: 100%;
    border-spacing: 0;
  }

  td {
    border-bottom: 1px solid ${colors.active};
    padding: ${spaces.sm} ${spaces.xs};
  }

  td:last-of-type {
    text-align: right;
    font-weight: ${fontWeights.button};
  }

  tr:last-of-type td {
    border-bottom: none;
  }

  button {
    margin-top: ${spaces.xl2};
    margin-left: auto;
    margin-bottom: ${spaces.xl2};
  }
`;

export const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const header = ({ spaces }: Theme) => css`
  margin: ${spaces.xl2} ${spaces.xs};
`;
