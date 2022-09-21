import type { ProductQuery } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { fetchProducts } from 'store/product';
import { useEffect, useState } from 'react';
import { Routes } from '@enums';
import { Container } from '@components/primitives';
import { ProductGrid } from './product-grid';
import { FilterHeader } from './filter-header';
import { Pagination } from './pagination';
import { ProductsLoader } from './products-loader';
import { deepEquals, getFilterDefinition, removeFilterFields } from './helpers';
import * as styles from './styles';

export const Filter = () => {
  const { query, push } = useRouter();
  const { loading } = useTypedSelector((store) => store.product);
  const [filter, setFilter] = useState<ProductQuery>(
    getFilterDefinition(query),
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filter = getFilterDefinition(query);
    setFilter(filter);
    dispatch(fetchProducts(filter || {}));
  }, [dispatch, query]);

  useEffect(() => {
    const queryFilter = getFilterDefinition(query);
    if (!filter || deepEquals(filter, queryFilter)) {
      return;
    }
    push({
      pathname: Routes.ITEMS,
      query: {
        filter: JSON.stringify(filter),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <FilterHeader
        filter={removeFilterFields(filter, ['from', 'limit'])}
        setFilter={setFilter}
      />
      <Container css={styles.container}>
        {loading ? (
          <ProductsLoader />
        ) : (
          <div css={styles.productGridWrapper}>
            <ProductGrid />
            <Pagination filter={filter} setFilter={setFilter} />
          </div>
        )}
      </Container>
    </>
  );
};
