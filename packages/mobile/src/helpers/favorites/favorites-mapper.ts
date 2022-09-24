import { FavoriteResponseDto, FavoritesMappedData } from '~/common/types/types';

const favoritesMapper = (arr: FavoriteResponseDto[]) => {
  const result: FavoritesMappedData[] = [];
  arr.map((item) => {
    result.push(Object.assign({}, item.product, { id: item.productId }));
  });
  result.sort((a, b) => (a.status > b.status ? 1 : -1));

  return result;
};

export { favoritesMapper };
