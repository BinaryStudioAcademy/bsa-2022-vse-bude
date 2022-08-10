import type { FC } from 'react';
import { StringCutterStyled } from './styles';
import type { StringCutterProps } from './types';

const StringCutter: FC<StringCutterProps> = ({ text }) => (
  <StringCutterStyled>{text}</StringCutterStyled>
);

export { StringCutter };
