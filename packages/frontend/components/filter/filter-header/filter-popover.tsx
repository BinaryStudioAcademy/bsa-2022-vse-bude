import { Button, Flex, Icon, Input, Popover } from '@components/primitives';
import { Select } from '@components/primitives/select';
import type { SelectOption } from '@components/primitives/select/types';
import { IconColor, IconName } from '@enums';
import { useTypedSelector } from '@hooks';
import type { CategoryDto, ProductQuery } from '@vse-bude/shared';
import { ITEM_FILTER } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import { removeFilterFields } from '../helpers';
import * as styles from './styles';
import { MAX_PRICE_NAME, MIN_PRICE_NAME, sortByOptions } from './utils';
import type { FilterPopoverProps, PriceOption, SortByOption } from './types';

export function FilterPopover({ filter, setFilter }: FilterPopoverProps) {
  const { t } = useTranslation();

  const categories = useTypedSelector((state) => state.category.list);

  const [category, setCategory] = useState<SelectOption>(null);
  const [sortBy, setSortBy] = useState<SortByOption>(null);
  const [price, setPrice] = useState<PriceOption>(null);

  const triggerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const sortBuyCurrent = sortByOptions(t).find(
      (item: SortByOption) =>
        item.value.order === filter?.order &&
        item.value.sortBy === filter?.sortBy,
    );
    sortBuyCurrent ? setSortBy(sortBuyCurrent) : setSortBy(null);
    setPrice({
      [MIN_PRICE_NAME]: filter?.priceGt || ITEM_FILTER.PRICE_GT_DEFAULT,
      [MAX_PRICE_NAME]: filter?.priceLt || ITEM_FILTER.PRICE_LT_DEFAULT,
    });

    const currentCategory = categories.find(
      (item) => item.id === filter?.categoryId,
    );

    currentCategory
      ? setCategory({
          title: currentCategory.title,
          value: currentCategory.id,
        })
      : setCategory(null);
  }, [categories, t, filter]);

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
    const filters: ProductQuery = {
      ...filter,
      categoryId: category?.value as string,
      sortBy: sortBy?.value.sortBy,
      order: sortBy?.value.order,
      priceGt: price[MIN_PRICE_NAME],
      priceLt: price[MAX_PRICE_NAME],
    };
    setFilter(removeFilterFields(filters, ['from', 'limit']));
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
          <h5 css={styles.popoverHeadline}>{t('items-page:label.category')}</h5>
          <Select
            options={categories.map((item: CategoryDto) => ({
              title: item.title,
              value: item.id,
            }))}
            value={category?.title}
            setValue={setCategory}
            id="post-category"
            name="category"
            placeholder={t('items-page:placeholder.category')}
          />
          <div css={styles.popoverDivider}></div>
          <h5 css={styles.popoverHeadline}> {t('items-page:label.price')}</h5>
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
          <h5 css={styles.popoverHeadline}> {t('items-page:label.sortBy')}</h5>
          <div css={styles.sortBySelect}>
            <Select
              value={sortBy?.title}
              setValue={setSortBy}
              options={sortByOptions(t)}
              placeholder={t('items-page:placeholder.sortBy')}
            />
          </div>
          <Flex justify={'flex-end'}>
            <Button onClick={onSaveHandler} size="small">
              {t('items-page:btn.save')}
            </Button>
          </Flex>
        </div>
      )}
    </Popover>
  );
}
