import { IconName } from '@enums';
import { IconButton } from '@primitives';
import { favoriteIcon } from './styles';
import type { FavoriteButtonProps } from './types';

export const FavoriteButton = ({
  isFavorite = false,
  onChangeIsFavorite,
}: FavoriteButtonProps) => {
  const color = isFavorite ? 'yellow' : 'white';
  const icon = isFavorite ? IconName.STAR_FULFILLED : IconName.STAR_OUTLINED;

  return (
    <IconButton
      css={favoriteIcon}
      onClick={onChangeIsFavorite}
      icon={icon}
      color={color}
      backgroundColor="darkgray"
      size="sm"
    />
  );
};
