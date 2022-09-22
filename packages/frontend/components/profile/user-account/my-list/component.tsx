import { useAppDispatch, useAuth, useTypedSelector } from '@hooks';
import { useMemo, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import type { RootState } from '@types';
import {
  Icon,
  Popover,
  Breadcrumbs,
  CategoryBadges,
  Modal,
} from '@components/primitives';
import { IconColor, IconName } from '@enums';
import { resetBadges, setDefaultBadges, resetFilter } from '@store';
import { SubPageName } from '../common';
import { Posted, Drafted, Purchased, Sold, Archived } from './cards';
import { FilterArrow } from './primitives';
import { Filter } from './filter';
import { CancelModal, DeleteModal } from './card-modals';
import { ProductSection } from './product-section';
import * as styles from './styles';
import { breadcrumbsPaths } from './components-data';
import { filterCallback } from './utils';

export const MyListInfo = () => {
  const { t } = useTranslation();
  const {
    itemsList,
    filterType,
    filterStatus,
    badges,
    showCancelModal,
    showDeleteModal,
  } = useTypedSelector((state: RootState) => state.myList);
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(setDefaultBadges([null, null]));
    dispatch(resetFilter());
  }, [dispatch]);

  const filteredItems = useMemo(
    () => filterCallback({ itemsList, filterType, filterStatus }),
    [itemsList, filterType, filterStatus],
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

      {filteredItems.purchased && filteredItems.purchased.length ? (
        <ProductSection
          headerText={t('my-list:card.purchased')}
          items={filteredItems.purchased}
          Card={Purchased}
        />
      ) : null}

      {filteredItems.sold && filteredItems.sold.length ? (
        <ProductSection
          headerText={t('my-list:card.sold')}
          items={filteredItems.sold}
          Card={Sold}
        />
      ) : null}

      {filteredItems.posted && filteredItems.posted.length ? (
        <ProductSection
          headerText={t('my-list:card.posted')}
          items={filteredItems.posted}
          Card={Posted}
        />
      ) : null}

      {filteredItems.drafts && filteredItems.drafts.length ? (
        <ProductSection
          headerText={t('my-list:card.drafted')}
          items={filteredItems.drafts}
          Card={Drafted}
        />
      ) : null}

      {filteredItems.archive && filteredItems.archive.length ? (
        <ProductSection
          headerText={t('my-list:card.archived')}
          items={filteredItems.archive}
          Card={Archived}
        />
      ) : null}

      <Modal visible={showCancelModal}>
        <CancelModal />
      </Modal>

      <Modal visible={showDeleteModal}>
        <DeleteModal />
      </Modal>
    </div>
  );
};
