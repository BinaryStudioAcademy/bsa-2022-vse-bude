import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPalette } from '@vse-bude/shared';
import { favoriteIcon } from './styles';
import type { FavoriteButtonProps } from './types';

export const FavoriteButton = ({
  isFavorite = false,
  onChangeIsFavorite,
}: FavoriteButtonProps) => {
  const color = isFavorite ? ColorPalette.YELLOW_100 : ColorPalette.WHITE_100;

  return (
    <div css={favoriteIcon}>
      <FontAwesomeIcon
        onClick={onChangeIsFavorite}
        icon={faStar}
        color={color}
        stroke="red"
      />
    </div>
  );
};
