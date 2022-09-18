import { ProductDto } from '@vse-bude/shared';
import { FavoritesMappedData } from '~/common/types/types';

const guestFavoritesMapper = (products: ProductDto[]) => {
  const favorites: FavoritesMappedData[] = [];
  products.map((product) => {
    const result = Object.assign(
      {},
      {
        id: product.id,
        title: product.title,
        description: product.description,
        imageLinks: product.imageLinks,
        price: product.price,
        status: product.status,
      },
    );
    favorites.push(result);
  });

  return favorites.sort((a, b) => (a.status > b.status ? 1 : -1));
};

export { guestFavoritesMapper };
