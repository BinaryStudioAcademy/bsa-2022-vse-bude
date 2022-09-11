import { useTypedSelector } from '@hooks';
import type { ProductQuery } from '@vse-bude/shared';
import { ITEM_FILTER } from '@vse-bude/shared';
import * as styles from './styles';
import type { PaginationProps } from './types';

export function Pagination({ filter, setFilter }: PaginationProps) {
  const { count } = useTypedSelector((store) => store.product);

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
    setFilter(filters);
  };

  return (
    <nav aria-label="Pagination Navigation" role="navigation">
      <ul css={styles.btnWrapper}>
        {count > 0 &&
          [...Array(Math.ceil(count / limit)).keys()].map((page) => {
            const isCurrent = currentPage === page + 1;

            return (
              <li key={page}>
                <button
                  data-variant={isCurrent && 'active'}
                  type="button"
                  css={styles.btn}
                  onClick={() => onClickHandler(page)}
                  aria-current={isCurrent}
                  aria-label={
                    isCurrent
                      ? `Current Page, Page ${currentPage}`
                      : `Goto Page ${page + 1}`
                  }
                >
                  {page + 1}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
