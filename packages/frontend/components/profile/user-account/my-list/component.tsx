import { useAppDispatch, useAuth, useTypedSelector } from '@hooks';
import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import type { RootState } from '@types';
import { ProductStatus } from '@vse-bude/shared';
import {
  Icon,
  Popover,
  Breadcrumbs,
  CategoryBadges,
  Modal,
} from '@components/primitives';
import { IconColor, IconName } from '@enums';
import { resetBadges } from '@store';
import { SubPageName, SectionHeader } from '../common';
import { Posted, Drafted, Purchased, Sold, Archived } from './cards';
import { FilterArrow } from './primitives';
import { Filter } from './filter/filter';
import { CancelModal } from './cancel-modal';
import * as styles from './styles';
import { breadcrumbsPaths } from './components-data';
import { typedItems, filterCallback } from './utils';

export const MyListInfo = () => {
  const { t } = useTranslation();
  const { badges, showCancelModal } = useTypedSelector(
    (state: RootState) => state.myList,
  );
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  const { itemsList, filterType, filterStatus } = useTypedSelector(
    (state: RootState) => state.myList,
  );

  const filteredItems = useMemo(
    () =>
      filterCallback({ itemsList, filterType, userId: user.id, filterStatus }),
    [itemsList, filterType, filterStatus, user.id],
  );

  const onRemoveBadge = ({
    value,
    type,
  }: {
    value: string;
    type: 'status' | 'type';
  }) => {
    dispatch(resetBadges({ type, value }));
  };

  return (
    <div css={styles.listWrapper}>
      <div>
        <Breadcrumbs
          paths={breadcrumbsPaths({ t, id: user?.id })}
          containerCssExtend={styles.breadcrumbsContainer}
          cssExtend={styles.breadcrumbs}
        />

        <div css={styles.pageNameWrapper}>
          <SubPageName>{t('my-list:pageName')}</SubPageName>
        </div>

        <div css={styles.filterContainer}>
          <div css={styles.filtered}>
            <CategoryBadges
              badges={badges
                .filter((item) => !!item)
                .map(({ value, type }) => ({
                  name: value,
                  onClick: () => onRemoveBadge({ value, type }),
                }))}
            />
          </div>

          <div css={styles.filterMenu}>
            <div css={styles.filterIconWrapper}>
              <Icon icon={IconName.FILTER} color={IconColor.GRAY} />
            </div>
            <Popover
              position="absolute"
              bodyWrapperCssExtend={styles.customPopover}
              trigger={({ isOpen }) => <FilterArrow isOpen={isOpen} />}
            >
              {() => <Filter />}
            </Popover>
          </div>
        </div>
      </div>

      {typedItems({
        items: filteredItems,
        byStatus: ProductStatus.FINISHED,
        byKey: 'author',
      }).length ? (
        <div css={styles.section}>
          <div css={styles.header}>
            <SectionHeader>{t('my-list:card.purchased')}</SectionHeader>
          </div>
          <div css={styles.container}>
            {typedItems({
              items: filteredItems,
              byStatus: ProductStatus.FINISHED,
              byKey: 'author',
            }).map((item) => (
              <Purchased key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : null}

      {typedItems({
        items: filteredItems,
        byStatus: ProductStatus.FINISHED,
        byKey: 'winner',
      }).length ? (
        <div css={styles.section}>
          <div css={styles.header}>
            <SectionHeader>{t('my-list:card.sold')}</SectionHeader>
          </div>
          <div css={styles.container}>
            {typedItems({
              items: filteredItems,
              byStatus: ProductStatus.FINISHED,
              byKey: 'winner',
            }).map((item) => (
              <Sold key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : null}

      {typedItems({
        items: filteredItems,
        byStatus: ProductStatus.ACTIVE,
      }).length ? (
        <div css={styles.section}>
          <div css={styles.header}>
            <SectionHeader>{t('my-list:card.posted')}</SectionHeader>
          </div>
          <div css={styles.container}>
            {typedItems({
              items: filteredItems,
              byStatus: ProductStatus.ACTIVE,
            }).map((item) => (
              <Posted key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : null}

      {typedItems({
        items: filteredItems,
        byStatus: ProductStatus.DRAFT,
      }).length ? (
        <div css={styles.section}>
          <div css={styles.header}>
            <SectionHeader>{t('my-list:card.drafted')}</SectionHeader>
          </div>
          <div css={styles.container}>
            {typedItems({
              items: filteredItems,
              byStatus: ProductStatus.DRAFT,
            }).map((item) => (
              <Drafted key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : null}

      {typedItems({
        items: filteredItems,
        byStatus: ProductStatus.CANCELLED,
      }).length ? (
        <div css={styles.section}>
          <div css={styles.header}>
            <SectionHeader>{t('my-list:card.archived')}</SectionHeader>
          </div>
          <div css={styles.container}>
            {typedItems({
              items: filteredItems,
              byStatus: ProductStatus.CANCELLED,
            }).map((item) => (
              <Archived key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : null}

      <Modal visible={showCancelModal}>
        <CancelModal />
      </Modal>
    </div>
  );
};
