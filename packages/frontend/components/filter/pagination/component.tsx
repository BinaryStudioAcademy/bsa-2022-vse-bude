import { IconButton } from '@components/primitives';
import { IconColor, IconName } from '@enums';
import { useTypedSelector } from '@hooks';
import type { ProductQuery } from '@vse-bude/shared';
import { ITEM_FILTER } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';
import type { PaginationProps } from './types';

export function Pagination({ filter, setFilter }: PaginationProps) {
  const { count } = useTypedSelector((store) => store.product);
  const { t } = useTranslation();

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
      aria-label={t('items-page:ariaLabel.navigation')}
      role="navigation"
    >
      {currentPage !== 1 && (
        <IconButton
          color={IconColor.BLACK}
          icon={IconName.ANGLE_LEFT}
          size={'sm'}
          cssExtend={styles.arrowBtnLeft}
          ariaLabel={t('items-page:ariaLabel.prevPage')}
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
                    ? t('items-page:ariaLabel.currentPage') + currentPage
                    : t('items-page:ariaLabel.goToPage') + page + 1
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
          ariaLabel={t('items-page:ariaLabel.nextPage')}
          onClick={() => onClickHandler(currentPage)}
        />
      )}
    </nav>
  ) : (
    <></>
  );
}
