import { IconColor, IconName } from '@enums';
import { IconButton } from '@primitives';
import { favoriteIcon } from './styles';
import type { FavoriteButtonProps } from './types';

export const FavoriteButton = ({
  isFavorite = false,
  size = 'sm',
  backgroundColor = 'darkgray',
  onChangeIsFavorite,
  cssExtended,
}: FavoriteButtonProps) => {
  const color = isFavorite ? IconColor.YELLOW : IconColor.WHITE;
  const icon = isFavorite ? IconName.STAR_FULFILLED : IconName.STAR_OUTLINED;

  return (
    <IconButton
      cssExtend={cssExtended || favoriteIcon}
      onClick={onChangeIsFavorite}
      icon={icon}
      color={color}
      backgroundColor={backgroundColor}
      size={size}
    />
  );
};
