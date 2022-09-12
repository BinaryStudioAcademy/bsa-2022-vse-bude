import { IconButton } from '@components/primitives';
import { IconColor, IconName } from '@enums';
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

  return count > 0 ? (
    <nav
      css={styles.btnWrapper}
      aria-label="Pagination Navigation"
      role="navigation"
    >
      {currentPage !== 1 && (
        <IconButton
          color={IconColor.BLACK}
          icon={IconName.ANGLE_LEFT}
          size={'sm'}
          cssExtend={styles.arrowBtnLeft}
          ariaLabel="Goto Previous Page"
          onClick={() => onClickHandler(currentPage - 2)}
        />
      )}
      <ul>
        {[...Array(Math.ceil(count / limit)).keys()].map((page) => {
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
      {currentPage !== Math.ceil(count / limit) && (
        <IconButton
          color={IconColor.BLACK}
          icon={IconName.ANGLE_RIGHT}
          size={'sm'}
          cssExtend={styles.arrowBtnRight}
          ariaLabel="Goto Next Page"
          onClick={() => onClickHandler(currentPage)}
        />
      )}
    </nav>
  ) : (
    <></>
  );
}
