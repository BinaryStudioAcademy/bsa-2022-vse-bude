import { CategoryBadges } from '@components/primitives/category-badge';
import { useTypedSelector } from '@hooks';
import { Breadcrumbs, Container, Flex } from '@primitives';
import { Order } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { ButtonGroup } from '@components/primitives/button-group';
import { removeFilterFields } from '../helpers';
import { FilterPopover } from './filter-popover';
import {
  ALL_PRODUCTS,
  filterBreadcrumbsPath,
  productTypeBtnArray,
} from './utils';
import type { FilterHeaderProps } from './types';
import * as styles from './styles';

export function FilterHeader({ filter, setFilter }: FilterHeaderProps) {
  const { t } = useTranslation();
  const [badges, setBadges] = useState([]);
  const categories = useTypedSelector((state) => state.category.list);
  const [productType, setProductType] = useState<string>(null);
  const currentCategory = categories.find(
    (item) => item.id === filter?.categoryId,
  );
  useEffect(() => {
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
  }, [filter]);

  const addTypeToQuery = (type) => {
    const updatedFilter = { ...filter };
    type !== ALL_PRODUCTS
      ? (updatedFilter.type = type)
      : delete updatedFilter?.type;
    setFilter(removeFilterFields(updatedFilter, ['from', 'limit']));
  };

  const removeBadge = (item) => {
    setBadges([...badges.filter((badge) => badge !== item)]);
    const deletedKey = Object.keys(filter).find((key) => filter[key] === item);
    setFilter(removeFilterFields(filter, ['from', 'limit', deletedKey]));
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
                    onClick: () => removeBadge(item),
                  }))}
                />
              )}
            </div>
            <Flex justify={'space-between'}>
              <Flex css={styles.categoryWrapper} justify={'space-between'}>
                <ButtonGroup
                  buttons={productTypeBtnArray(t).map((item) => ({
                    name: item.name,
                    text: item.text,
                    onClick: () => {
                      setProductType(item.name);
                      addTypeToQuery(item.name);
                    },
                  }))}
                  active={productType}
                  setActive={setProductType}
                />
              </Flex>
              <div css={styles.controllersWrapper}>
                <FilterPopover filter={filter} setFilter={setFilter} />
              </div>
            </Flex>
          </div>
        </header>
      </Container>
    </>
  );
}
