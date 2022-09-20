import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { ColorPalette } from '@vse-bude/shared';

export const input = ({
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

  &[data-variant='secondary'] {
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
    & + span {
      color: ${colors.error};
    }
  }

  &[data-erasable-part='inerasable'] {
    padding: 14px ${spaces.md} 14px ${spaces.xl3};
  }
`;

export const passwordPadding = ({ spaces }: Theme) => css`
  padding: 12px 50px 12px ${spaces.md};
`;

export const error = ({ colors }: Theme) => css`
  color: ${colors.error};
`;

export const label = ({ colors, fontSizes, lineHeights }: Theme) => css`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.text};

  &[data-variant='secondary'] {
    color: ${colors.background};
  }

  span {
    font-size: ${fontSizes.h4};
    line-height: ${lineHeights.caption};
    color: ${colors.primary};
  }
`;

export const inputWrapper = () => css`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const errorMessage = ({
  colors,
  fontSizes,
  lineHeights,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  margin: 2px 0 0;
  cursor: pointer;
  font-size: ${fontSizes.caption};
  font-weight: bold;
  line-height: ${lineHeights.caption};
  font-family: inherit;
  color: ${colors.error};
  & span {
    margin-right: ${spaces.xs};
  }
`;

export const buttonWrapper = () => css`
  position: relative;
`;

export const showBtn = () => css`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const searchWrapper = ({ radiuses }: Theme) => css`
  position: relative;
  border-radius: ${radiuses.lg};
`;

export const searchInput = ({
  colors,
  fontSizes,
  lineHeights,
  heights,
  radiuses,
  spaces,
}: Theme) => css`
  transition: 200ms linear;
  width: 100%;
  height: ${heights.controlSm};
  border: none;
  border-radius: ${radiuses.lg};
  padding: 0 ${spaces.lg};
  background-color: ${colors.backgroundLight};
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

export const passwordVisibilityIcon = css`
  color: ${ColorPalette.GRAY_300};
`;
export const infoIco = ({ fontSizes, spaces }: Theme) => css`
  position: relative;
  bottom: 2px;
  margin: 0 ${spaces.xs};
  font-size: ${fontSizes.caption} !important;
`;
export const tooltipText = ({ fontSizes, colors, lineHeights }: Theme) => css`
  max-width: 300px;
  text-align: center;
  font-family: inherit;
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  color: ${colors.secondaryLight};
`;
export const inerasableValue = ({
  fontSizes,
  colors,
  lineHeights,
}: Theme) => css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 11px;
  transition: 200ms linear;
  font-size: ${fontSizes.toggle};
  line-height: ${lineHeights.toggle};
  font-family: inherit;
  color: ${colors.text};

  &[data-status='error'] {
    color: ${colors.error};
  }
`;

export const inputValueWrapper = css`
  position: relative;
`;

export const iconWrapper = css`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  opacity: 0.5;
`;

export const datePickerWrapper = ({
  spaces,
  radiuses,
  colors,
  shadows,
}: Theme) => css`
  .react-datepicker {
    position: relative;
    top: 5px;
    border: none;
    border-radius: 10px;
    background-color: ${colors.background};
    box-shadow: ${shadows.bottom};
    overflow: hidden;

    &-popper {
      z-index: 4;
    }

    &__header {
      border: none;
      border-radius: ${radiuses.sm} ${radiuses.sm} 0 0;
      padding: ${spaces.sm} 0 0 0;
      background-color: ${colors.backgroundLight};
    }

    &__month {
      display: flex;
      flex-direction: column;
      margin: 0 10px 10px;

      &-container {
        border: none;
        border-radius: ${radiuses.sm};
        box-sizing: border-box;
        background-color: ${colors.background};
      }
    }

    &__week {
      display: flex;
      margin-bottom: ${spaces.xs};
    }

    &__day {
      margin: 0;

      &--disabled {
        color: ${colors.disabled};
      }

      &:not(:nth-of-type(7n)) {
        margin-right: ${spaces.sm};
      }

      &-names {
        display: flex;
        margin: ${spaces.sm};
      }

      &-name {
        display: flex;
        justify-content: center;
        margin: 0;

        &:not(:last-of-type) {
          margin-right: ${spaces.sm};
        }
      }

      &--keyboard-selected,
      &--selected {
        background-color: ${colors.primaryLight};

        &:hover {
          background-color: ${colors.primaryLightHover}!important;
        }
      }

      &--today {
        font-weight: bold;
      }

      &:hover:not(.react-datepicker__day--disabled) {
        text-decoration: underline;
      }
    }

    input[type='time'] {
      border: ${colors.backgroundDark} 1px solid;
      border-radius: ${radiuses.sm};
      padding: 0 ${spaces.sm};
      background-color: ${colors.background};
      font-family: inherit;
      color: ${colors.text};

      ::placeholder {
        opacity: 0.3;
        color: ${colors.text};
      }
    }
  }
`;
