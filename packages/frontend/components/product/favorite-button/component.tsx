import { IconColor, IconName } from '@enums';
import { IconButton } from '@primitives';
import { useTranslation } from 'next-i18next';
import { favoriteIcon } from './styles';
import type { FavoriteButtonProps } from './types';

export const FavoriteButton = ({
  isFavorite = false,
  size = 'sm',
  backgroundColor = 'darkgray',
  onChangeIsFavorite,
  cssExtended,
  inFavouriteColor,
  notInFavouriteColor,
  disabled = false,
}: FavoriteButtonProps) => {
  const { t } = useTranslation();
  const color = isFavorite
    ? inFavouriteColor || IconColor.YELLOW
    : notInFavouriteColor || IconColor.WHITE;
  const icon = isFavorite ? IconName.STAR_FULFILLED : IconName.STAR_OUTLINED;

  return (
    <IconButton
      cssExtend={cssExtended || favoriteIcon}
      onClick={onChangeIsFavorite}
      icon={icon}
      color={color}
      backgroundColor={backgroundColor}
      size={size}
      ariaLabel={
        isFavorite
          ? t('common:components.product.removeFromFavorites')
          : t('common:components.product.addToFavorites')
      }
      disabled={disabled}
    />
  );
};
