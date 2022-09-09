import { Routes } from '@enums';
import { useTypedSelector } from '@hooks';
import type { ProductQuery } from '@vse-bude/shared';
import { ITEM_FILTER } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import * as styles from './styles';

export function Pagination() {
  const { count } = useTypedSelector((store) => store.product);
  const { query, push } = useRouter();

  const filter: ProductQuery =
    query.filter && JSON.parse(query.filter as string);
  const limit = filter?.limit
    ? filter.limit
    : ITEM_FILTER.PRODUCT_LIMIT_DEFAULT;
  const currentPage = filter?.from ? Math.ceil(filter.from / limit) + 1 : 1;

  const onClickHandler = (page) => {
    const filters: ProductQuery = {
      ...filter,
      limit,
      from: page * limit,
    };
    push({
      pathname: Routes.ITEMS,
      query: {
        filter: JSON.stringify(filters),
      },
    });
  };

  return (
    <div css={styles.btnWrapper}>
      {count > 0 &&
        [...Array(Math.ceil(count / limit)).keys()].map((page) => (
          <button
            data-variant={currentPage === page + 1 && 'active'}
            type="button"
            css={styles.btn}
            onClick={() => onClickHandler(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
    </div>
  );
}
