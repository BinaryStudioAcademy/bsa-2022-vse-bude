import type { ProductQuery } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { fetchProducts } from 'store/product';
import { useEffect } from 'react';
import { Routes } from '@enums';
import { Container } from '@components/primitives';
import { ProductGrid } from './product-grid';
import { FilterHeader } from './filter-header';
import { Pagination } from './pagination';
import { ProductsLoader } from './products-loader';

export const Filter = () => {
  const { query, push } = useRouter();
  const { list, loading } = useTypedSelector((store) => store.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!query?.filter) {
      dispatch(fetchProducts({}));

      return;
    }
    try {
      const filter: ProductQuery =
        query.filter && JSON.parse(query.filter as string);
      dispatch(fetchProducts(filter));
    } catch (_) {
      push({
        pathname: Routes.ITEMS,
      });
    }
  }, [dispatch, query, push]);

  return (
    <>
      <FilterHeader />
      <Container>
        {loading ? (
          <ProductsLoader />
        ) : (
          <>
            <ProductGrid lots={list} />
            <Pagination />
          </>
        )}
      </Container>
    </>
  );
};
