import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { IconButton, Button } from '@primitives';
import { IconColor, IconName } from '@enums';
import type { ProductPost } from '@vse-bude/shared';
import { ApiRoutes, ProductApiRoutes } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@hooks';
import { addItemToPosted, setItemId, setVisabilityDeleteModal } from '@store';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ItemDescription,
  ItemDate,
  Tooltip,
  ItemType,
} from '../primitives';
import type { CardProps } from './types';
import * as styles from './styles';

export const Drafted = ({ data }: CardProps) => {
  const [showDeleteTooltip, setShowDeleteTooltip] = useState(false);
  const [showSeeItemTooltip, setSeeItemTooltip] = useState(false);
  const { id, title, imageLinks, price, description, updatedAt, type } = data;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onPostClick = () => {
    const reqDto: ProductPost = {
      itemId: id,
      postDate: new Date().toISOString(),
    };
    dispatch(addItemToPosted({ data: reqDto }));
  };

  const onEditClick = () => {
    router.push(`${ApiRoutes.ITEMS}/${ProductApiRoutes.EDIT}/${id}`);
  };

  const onOpenDeleteModal = () => {
    dispatch(setVisabilityDeleteModal());
    dispatch(setItemId(id));
  };

  const onSeeItemClick = () => {
    router.push(`${ApiRoutes.ITEMS}/${id}`);
  };

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
          <div>
            <span css={styles.editDate}>{t('my-list:card.edit')}</span>
            <ItemDate time={updatedAt} />
          </div>
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <ItemDescription description={description} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.drafted')} />
              <ItemType type={type} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <div css={styles.publishButtonWrapper}>
              <Button onClick={onPostClick} size="small">
                {t('my-list:card.publish')}
              </Button>
            </div>

            <IconButton
              ariaLabel="edit"
              backgroundColor="lightgray"
              color={IconColor.GRAY}
              icon={IconName.PENCIL}
              size="sm"
              cssExtend={styles.iconButton}
              onClick={onEditClick}
            />

            <div css={styles.buttonWrapper}>
              {showDeleteTooltip ? (
                <Tooltip>{t('my-list:card.tooltip-delete')}</Tooltip>
              ) : null}
              <IconButton
                ariaLabel="delete"
                backgroundColor="darkgray"
                color={IconColor.GRAY}
                icon={IconName.DELETE}
                size="sm"
                cssExtend={styles.iconButton}
                onClick={onOpenDeleteModal}
                onMouseEnter={() => setShowDeleteTooltip(true)}
                onMouseLeave={() => setShowDeleteTooltip(false)}
              />
            </div>

            <div css={styles.buttonWrapper}>
              {showSeeItemTooltip ? (
                <Tooltip>{t('my-list:card.tooltip-seeItem')}</Tooltip>
              ) : null}
              <IconButton
                ariaLabel="delete"
                backgroundColor="darkgray"
                color={IconColor.GRAY}
                icon={IconName.ITEM_CARD}
                size="sm"
                onClick={onSeeItemClick}
                onMouseEnter={() => setSeeItemTooltip(true)}
                onMouseLeave={() => setSeeItemTooltip(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
