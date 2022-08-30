import type { ProductType } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { fetchProducts } from 'store/product';
import { useEffect } from 'react';
import { ProductGrid } from './product-grid/component';

interface RequestOptions {
  limit?: number;
  type?: ProductType;
}

export const Filter = () => {
  const { query } = useRouter();
  const { list } = useTypedSelector((store) => store.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filter: RequestOptions = Object.fromEntries(
      new URLSearchParams(query as unknown as string),
    );

    dispatch(fetchProducts({ limit: filter.limit, type: filter.type }));
  }, [dispatch, query]);

  return (
    <div>
      <ProductGrid lots={list}></ProductGrid>
    </div>
  );
};
