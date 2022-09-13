import { CategoryBadges } from '@components/primitives/category-badge';
import { useTypedSelector } from '@hooks';
import { Breadcrumbs, Container, Flex } from '@primitives';
import type { ProductQuery } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { ButtonGroup } from '@components/primitives/button-group';
import { removeFilterFields } from '../helpers';
import { FilterPopover } from './filter-popover';
import {
  ALL_PRODUCTS,
  filterBreadcrumbsPath,
  getBudgesFromFilter,
  productTypeBtnArray,
} from './utils';
import type { BadgeOption, FilterHeaderProps } from './types';
import * as styles from './styles';

export function FilterHeader({ filter, setFilter }: FilterHeaderProps) {
  const { t } = useTranslation();
  const [badges, setBadges] = useState<BadgeOption[]>([]);
  const categories = useTypedSelector((state) => state.category.list);
  const currentCategory = categories.find(
    (item) => item.id === filter?.categoryId,
  );
  useEffect(() => {
    setBadges(getBudgesFromFilter(filter, t, currentCategory));
  }, [filter, t, currentCategory]);

  const addTypeToQuery = (type) => {
    const updatedFilter = { ...filter };
    type !== ALL_PRODUCTS
      ? (updatedFilter.type = type)
      : delete updatedFilter?.type;
    setFilter(updatedFilter);
  };

  const removeBadge = (value) => {
    setBadges([...badges.filter((badge) => badge.value !== value)]);
    const deletedKey = Object.keys(filter).find(
      (key) => filter[key] === value,
    ) as keyof ProductQuery;
    deletedKey === 'sortBy'
      ? setFilter(removeFilterFields(filter, ['sortBy', 'order']))
      : setFilter(removeFilterFields(filter, [deletedKey]));
  };

  return (
    <>
      <Breadcrumbs
        paths={filterBreadcrumbsPath(t, currentCategory, filter?.type)}
      />
      <Container>
        <header css={styles.header}>
          <h3 css={styles.headline}>{t('items-page:headline.header')}</h3>
          <div css={styles.controlsWrapper}>
            <div css={styles.badgesWrapper}>
              {badges?.length > 0 && (
                <CategoryBadges
                  badges={badges.map(({ name, value }) => ({
                    name,
                    onClick: () => removeBadge(value),
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
                    onClick: () => addTypeToQuery(item.name),
                  }))}
                  active={filter?.type || ALL_PRODUCTS}
                  setActive={addTypeToQuery}
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
