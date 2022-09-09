import { Button, Flex, Icon, Input, Popover } from '@components/primitives';
import { Select } from '@components/primitives/select';
import type { SelectOption } from '@components/primitives/select/types';
import { IconColor, IconName, Routes } from '@enums';
import { useTypedSelector } from '@hooks';
import type { CategoryDto, ProductQuery } from '@vse-bude/shared';
import { ITEM_FILTER } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import * as styles from './styles';
import { MAX_PRICE_NAME, MIN_PRICE_NAME, sortByOptions } from './filter-utils';
import type { PriceOption, SortByOption } from './types';

export function FilterPopover() {
  const { push, query } = useRouter();
  const { t } = useTranslation();

  const categories = useTypedSelector((state) => state.category.list);

  const [category, setCategory] = useState<SelectOption>(null);
  const [sortBy, setSortBy] = useState<SortByOption>(null);
  const [price, setPrice] = useState<PriceOption>(null);

  const triggerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const filter: ProductQuery =
      query.filter && JSON.parse(query.filter as string);
    const sortBuyCurrent = sortByOptions(t).find(
      (item: SortByOption) =>
        item.value.order === filter?.order &&
        item.value.sortBy === filter?.sortBy,
    );
    sortBuyCurrent && setSortBy(sortBuyCurrent);
    setPrice({
      [MIN_PRICE_NAME]: filter?.priceGt || ITEM_FILTER.PRICE_GT_DEFAULT,
      [MAX_PRICE_NAME]: filter?.priceLt || ITEM_FILTER.PRICE_LT_DEFAULT,
    });
    if (filter?.categoryId) {
      const currentCategory = categories.find(
        (item) => item.id === filter.categoryId,
      );
      currentCategory &&
        setCategory({
          title: currentCategory.title,
          value: currentCategory.id,
        });
    }
  }, [query, categories, t]);

  const priceHandler = ({ target }) => {
    const { value, name } = target;
    if (name === MIN_PRICE_NAME) {
      value >= price[MAX_PRICE_NAME]
        ? setPrice({ [MAX_PRICE_NAME]: +value + 1, [MIN_PRICE_NAME]: +value })
        : setPrice({ ...price, [MIN_PRICE_NAME]: +value });
    }
    if (name === MAX_PRICE_NAME) {
      value <= price[MIN_PRICE_NAME]
        ? setPrice({ [MAX_PRICE_NAME]: +value + 1, [MIN_PRICE_NAME]: +value })
        : setPrice({ ...price, [MAX_PRICE_NAME]: +value });
    }
  };

  const onSaveHandler = () => {
    triggerRef.current.click();
    const filter: ProductQuery =
      query.filter && JSON.parse(query.filter as string);
    const filters: ProductQuery = {
      ...filter,
      categoryId: category?.value as string,
      sortBy: sortBy?.value.sortBy,
      order: sortBy?.value.order,
      priceGt: price[MIN_PRICE_NAME],
      priceLt: price[MAX_PRICE_NAME],
    };
    push({
      pathname: Routes.ITEMS,
      query: {
        filter: JSON.stringify(filters),
      },
    });
  };

  return (
    <Popover
      position="absolute"
      bodyWrapperCssExtend={styles.popoverWrapper}
      trigger={
        <div ref={triggerRef} css={styles.iconWrapper}>
          <Icon color={IconColor.BLACK} icon={IconName.FILTER} size={'md'} />
          <Icon
            color={IconColor.BLACK}
            icon={IconName.ANGLE_DOWN}
            size={'xs'}
            cssExtend={styles.downIcon}
          />
        </div>
      }
    >
      {() => (
        <div css={styles.popover}>
          <h5 css={styles.popoverHeadline}>Category</h5>
          <Select
            options={categories.map((item: CategoryDto) => ({
              title: item.title,
              value: item.id,
            }))}
            value={category?.title}
            setValue={setCategory}
            id="post-category"
            name="category"
            placeholder={t('create-post:placeholder.category')}
          />
          <div css={styles.popoverDivider}></div>
          <h5 css={styles.popoverHeadline}>Price</h5>
          <Flex css={styles.price}>
            <Input
              name={MIN_PRICE_NAME}
              onChange={priceHandler}
              value={price[MIN_PRICE_NAME]}
              min={0}
              variant="primary"
              id="filter-price"
              type="number"
            />
            <Input
              name={MAX_PRICE_NAME}
              onChange={priceHandler}
              value={price[MAX_PRICE_NAME]}
              min={1}
              variant="primary"
              id="filter-price"
              type="number"
            />
          </Flex>
          <div css={styles.popoverDivider}></div>
          <h5 css={styles.popoverHeadline}>Sort by</h5>
          <div css={styles.sortBySelect}>
            <Select
              value={sortBy?.title}
              setValue={setSortBy}
              options={sortByOptions(t)}
            />
          </div>
          <Flex justify={'flex-end'}>
            <Button onClick={onSaveHandler} size="small">
              Save
            </Button>
          </Flex>
        </div>
      )}
    </Popover>
  );
}
