import { CategoryBadges } from '@components/primitives/category-badge';
import { Routes } from '@enums';
import { useTypedSelector } from '@hooks';
import { Breadcrumbs, Container, Flex } from '@primitives';
import type { ProductQuery } from '@vse-bude/shared';
import { Order } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FilterPopover } from './filter-popover';
import { ALL_PRODUCTS, filterBreadcrumbsPath } from './filter-utils';
import type { AllProductType } from './types';
import * as styles from './styles';

export function FilterHeader() {
  const { t } = useTranslation();
  const { query, push } = useRouter();
  const [badges, setBadges] = useState([]);
  const categories = useTypedSelector((state) => state.category.list);
  const [productType, setProductType] = useState<AllProductType>(null);

  const filter: ProductQuery =
    query.filter && JSON.parse(query.filter as string);
  const currentCategory = categories.find(
    (item) => item.id === filter?.categoryId,
  );
  useEffect(() => {
    const filter: ProductQuery =
      query.filter && JSON.parse(query.filter as string);
    setProductType(filter?.type || ALL_PRODUCTS);

    filter &&
      setBadges(
        Object.keys(filter)
          .map((item) => {
            if (item === Order.ASC || item === Order.DESC) return;

            return filter[item];
          })
          .filter((item) => item),
      );
  }, [query]);

  const addTypeToQuery = (type) => {
    const filter: ProductQuery =
      (query.filter && JSON.parse(query.filter as string)) || {};
    type !== ALL_PRODUCTS ? (filter.type = type) : delete filter?.type;
    push({
      pathname: Routes.ITEMS,
      query: {
        filter: JSON.stringify(filter),
      },
    });
  };

  return (
    <>
      <Breadcrumbs
        paths={filterBreadcrumbsPath(t, currentCategory, filter?.type)}
      />
      <Container>
        <header css={styles.header}>
          <h3 css={styles.headline}>Find Your Special Lots</h3>
          <div css={styles.controlsWrapper}>
            <div css={styles.badgesWrapper}>
              {badges.length > 0 && (
                <CategoryBadges
                  badges={badges.map((item) => ({
                    name: item,
                    onClick: () => {
                      setBadges([...badges.filter((badg) => badg !== item)]);
                      const deletedKey = Object.keys(filter).find(
                        (key) => filter[key] === item,
                      );
                      deletedKey && delete filter[deletedKey];
                      push({
                        pathname: Routes.ITEMS,
                        query: {
                          filter: JSON.stringify(filter),
                        },
                      });
                    },
                  }))}
                />
              )}
            </div>
            <Flex justify={'space-between'}>
              <Flex css={styles.categoryWrapper} justify={'space-between'}>
                <button
                  onClick={() => {
                    setProductType(ALL_PRODUCTS);
                    addTypeToQuery(ALL_PRODUCTS);
                  }}
                >
                  {t('items-page:typeBtn.ALL')}
                </button>
                <button
                  onClick={() => {
                    setProductType(ProductType.SELLING);
                    addTypeToQuery(ProductType.SELLING);
                  }}
                >
                  {t('items-page:typeBtn.SELLING')}
                </button>
                <button
                  onClick={() => {
                    setProductType(ProductType.AUCTION);
                    addTypeToQuery(ProductType.AUCTION);
                  }}
                >
                  {t('items-page:typeBtn.AUCTION')}
                </button>
                {productType}
              </Flex>
              <div css={styles.controllersWrapper}>
                <FilterPopover />
              </div>
            </Flex>
          </div>
        </header>
      </Container>
    </>
  );
}
