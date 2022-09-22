import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const form = ({ spaces }: Theme) => css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: ${spaces.xl11};
`;
export const formWrapper = () => css`
  max-width: 670px;
  width: 100%;
`;

export const sections = css`
  max-width: 670px;
  width: 100%;
`;

export const sectionRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.xl1};
`;

export const groupInputs = ({ spaces }: Theme) => css`
  gap: ${spaces.md};
`;

export const inputRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
  flex-grow: 1;
`;
export const conditionSelect = css`
  top: 100%;
  z-index: 2;
  width: fit-content;
`;

export const selectRow = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;

export const pageHeader = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.xl1};
  margin-top: ${spaces.xl5};
  font-size: ${fontSizes.h3};
  font-family: inherit;
  line-height: ${lineHeights.h3};
  font-weight: ${fontWeights.h3};
  color: ${colors.text};
  width: 100%;
  text-align: left;
`;

export const photosCaption = ({
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  spaces,
}: Theme) => css`
  margin-bottom: ${spaces.lg};
  margin-top: -${spaces.md};
  font-size: ${fontSizes.caption};
  line-height: ${lineHeights.caption};
  font-weight: ${fontWeights.caption};
  font-family: inherit;
  color: ${colors.textLight};
  text-align: left;
`;

export const btnWrapper = css`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const formLoader = css`
  position: absolute;
  left: 0;
`;

export const saveDraftBtn = ({ spaces }: Theme) => css`
  margin-right: ${spaces.sm};
`;
export const smallInputRow = css`
  /* display: none; */
  width: 130px;
`;

export const photosWrapper = ({ spaces }: Theme) => css`
  width: 100%;
  &[data-variant='filled'] {
    display: grid;
    gap: ${spaces.md};
    grid-template-columns: repeat(auto-fill, 156px);
  }
`;

export const photosInput = css`
  display: none;
`;

export const imgWrapper = ({ radiuses, colors }: Theme) => css`
  position: relative;
  height: 150px;
  border-radius: ${radiuses.md};
  background-color: ${colors.backgroundLight};
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export const deleteImageBtn = ({ spaces }: Theme) => css`
  position: absolute;
  right: ${spaces.sm};
  top: ${spaces.sm};
  z-index: 1;
`;
export const photosLabelWrapper = ({ radiuses, colors, spaces }: Theme) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spaces.md};
  border-radius: ${radiuses.md};
  background-color: ${colors.backgroundLight};
  &[data-variant='empty'] {
    padding: ${spaces.xl4} ${spaces.md};
  }
`;

export const labelWrapperInner = ({ radiuses, colors, spaces }: Theme) => css`
  transition: 200ms linear;
  width: 100%;
  border-radius: ${radiuses.md};
  border: 1px dashed ${colors.backgroundDark};
  padding: ${spaces.md};
  &[data-variant='filled'] {
    padding: ${spaces.xs};
  }
  &[data-drag='active'] {
    border-color: ${colors.primary};
  }
`;

export const photosLabel = ({
  lineHeights,
  fontSizes,
  fontWeights,
  colors,
}: Theme) => css`
  flex-grow: 1;
  font-family: inherit;
  font-size: ${fontSizes.label};
  font-weight: ${fontWeights.label};
  line-height: ${lineHeights.label};
  color: ${colors.backgroundDark};
  & button {
    transition: 200ms linear;
    font-family: inherit;
    font-size: ${fontSizes.label};
    font-weight: ${fontWeights.label};
    line-height: ${lineHeights.label};
    color: ${colors.primaryLight};
    background-color: transparent;
    text-align: left;
    border: none;
    cursor: pointer;
    &:hover {
      color: ${colors.primaryLightHover};
    }
  }
`;

export const photoIco = ({ colors, spaces }: Theme) => css`
  margin-right: ${spaces.sm};
  color: ${colors.primary};
  &[data-variant='filled'] {
    align-self: flex-start;
  }
`;
export const photosError = ({
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

export const icoWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
