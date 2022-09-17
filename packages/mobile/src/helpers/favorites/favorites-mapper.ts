import { FavoriteResponseDto, FavoritesMappedData } from '~/common/types/types';

const favoritesMapper = (favoritesArray: FavoriteResponseDto[]) => {
  const favorites: FavoritesMappedData[] = [];
  favoritesArray.map((item) => {
    favorites.push(Object.assign({}, item.product, { id: item.productId }));
  });

  return favorites.sort((a, b) => (a.status > b.status ? 1 : -1));
};

export { favoritesMapper };
