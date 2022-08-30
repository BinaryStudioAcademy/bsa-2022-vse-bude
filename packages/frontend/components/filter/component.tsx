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
  const router = useRouter();
  const query = router.query as unknown as string;
  const { list } = useTypedSelector((store) => store.product);
  const filter: RequestOptions = Object.fromEntries(new URLSearchParams(query));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ limit: filter.limit, type: filter.type }));
  }, [dispatch, filter]);
  
  return(
  <div>
    <ProductGrid lots={list}></ProductGrid>
  </div>
);
};
