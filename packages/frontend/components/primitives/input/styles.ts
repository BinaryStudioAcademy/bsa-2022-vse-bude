import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const StyledInput = ({
  colors,
  fontSizes,
  lineHeights,
  radiuses,
  heights,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  border: ${colors.backgroundLight} 2px solid;
  border-radius: ${radiuses.md};
  box-sizing: border-box;
  width: 100%;
  height: ${heights.controlBg};
  padding: 14px ${spaces.md};
  background-color: ${colors.backgroundLight};
  font-size: ${fontSizes.toggle};
  line-height: ${lineHeights.toggle};
  font-family: inherit;
  color: ${colors.text};

  :focus {
    border-color: ${colors.backgroundDark};
    caret-color: ${colors.primary};
    outline: none;
  }

  ::placeholder {
    opacity: 0.2;
  }

  &[data-padding-variant='text'] {
  }

  &[data-padding-variant='password'] {
    padding: 12px 50px 12px ${spaces.md};
  }

  &[data-color-style='footer'] {
  }

  &[data-color-style='footer'] {
    border: ${colors.secondaryLight} 2px solid;
    background-color: ${colors.secondaryLight};
    color: ${colors.background};

    ::placeholder {
      opacity: 0.4;
      color: ${colors.background};
    }
    &:focus {
      border-color: ${colors.secondaryDark};
      caret-color: ${colors.background};
    }
  }

  &[data-status='error'] {
    color: ${colors.error};
  }
`;

export const error = ({ colors }: Theme) => css`
  color: ${colors.error};
`;

export const StyledLabel = ({ colors, fontSizes, lineHeights }: Theme) => css`
  margin-bottom: 4px;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.text};

  &[data-color-style='footer'] {
    color: ${colors.background};
  }
`;

export const InputWrapper = () => css`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = ({
  colors,
  fontSizes,
  lineHeights,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  margin: 2px 0 0;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.error};
  & span {
    margin-right: ${spaces.xs};
  }
`;

export const ButtonWrapper = () => css`
  position: relative;
`;

export const ShowBtn = () => css`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const SearchWrapper = ({ radiuses }: Theme) => css`
  position: relative;
  box-shadow: -1px -2px 23px 0px #c3c3c340;
  border-radius: ${radiuses.lg};
`;

export const StyledSearchInput = ({
  colors,
  fontSizes,
  lineHeights,
  radiuses,
}: Theme) => css`
  transition: 200ms linear;
  box-shadow: 2px 5px 10px 0px #c3c3c340;
  width: 100%;
  height: 60px;
  border: ${colors.backgroundDark} 1px solid;
  border-radius: ${radiuses.lg};
  box-sizing: border-box;
  padding: 22px 34px;
  background-color: ${colors.background};
  font-size: ${fontSizes.toggle};
  line-height: ${lineHeights.toggle};
  font-family: inherit;
  color: ${colors.text};
  ::placeholder {
    opacity: 0.3;
    color: ${colors.text};
  }
  :focus {
    outline: none;
  }
`;
