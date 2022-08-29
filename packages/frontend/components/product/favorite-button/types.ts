import type { Interpolation } from '@emotion/react';
import type { Theme } from '@emotion/react';
import type { BackgroundColorProp } from 'components/primitives/icon-button/types';
import type { SizeProp } from 'components/primitives/icon/types';

export interface FavoriteButtonProps {
  size?: SizeProp;
  isFavorite?: boolean;
  backgroundColor?: BackgroundColorProp;
  onChangeIsFavorite: () => void;
  cssExtended?: Interpolation<Theme>;
}
