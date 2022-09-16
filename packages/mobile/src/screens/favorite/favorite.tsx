import React, { FC, useEffect } from 'react';
import { FavoriteResponseDto } from '~/common/types/types';
import { useAppDispatch, useAppSelector } from '~/hooks/hooks';
import { selectFavorites } from '~/store/selectors';
import { products as productsActions } from '~/store/actions';
import { ScreenWrapper, FlatList } from '~/components/components';
import { ProductStatus } from '@vse-bude/shared';
import { FavoriteCard } from './components/favorite-card';

export type RenderFavorites = {
  description: string;
  imageLinks: string[];
  price: string | number;
  status: ProductStatus;
  title: string;
  id: string;
};

const Favorite: FC = () => {
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsActions.fetchFavorites({ limit: 20 }));
  }, [dispatch]);

  const mapper = (arr: FavoriteResponseDto[]) => {
    const result: RenderFavorites[] = [];
    arr.map((item) => {
      result.push(Object.assign({}, item.product, { id: item.productId }));
    });

    return result;
  };

  const favProduct = mapper(favorites);

  return (
    <ScreenWrapper>
      <FlatList
        data={favProduct}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FavoriteCard product={item} />}
      />
    </ScreenWrapper>
  );
};

export { Favorite };
