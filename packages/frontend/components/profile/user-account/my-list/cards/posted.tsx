import { useState } from 'react';
import { IconButton } from '@primitives';
import { IconColor, IconName } from '@enums';
import { useTranslation } from 'next-i18next';
import {
  setVisabilityCancelModal,
  setVisabilityDeleteModal,
  setItemId,
} from '@store';
import { useAppDispatch } from '@hooks';
import { ApiRoutes, ProductApiRoutes } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ItemDescription,
  ItemDate,
  Views,
  Tooltip,
  ItemType,
} from '../primitives';
import type { CardProps } from './types';
import * as styles from './styles';

export const Posted = ({ data }: CardProps) => {
  const [showArchiveTooltip, setShowArchiveTooltip] = useState(false);
  const [showDeleteTooltip, setShowDeleteTooltip] = useState(false);
  const [showSeeItemTooltip, setSeeItemTooltip] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { id, title, imageLinks, price, description, views, postDate, type } =
    data;
  const router = useRouter();

  const onOpenCancelModal = () => {
    dispatch(setVisabilityCancelModal());
    dispatch(setItemId(id));
  };

  const onOpenDeleteModal = () => {
    dispatch(setVisabilityDeleteModal());
    dispatch(setItemId(id));
  };

  const onEditClick = () => {
    router.push(`${ApiRoutes.ITEMS}/${ProductApiRoutes.EDIT}/${id}`);
  };

  const onSeeItemClick = () => {
    router.push(`${ApiRoutes.ITEMS}/${id}`);
  };

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
          <ItemDate time={postDate} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <ItemDescription description={description} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.posted')} />
              <ItemType type={type} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <Views views={views} />
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
              {showArchiveTooltip ? (
                <Tooltip>{t('my-list:card.tooltip-xmark')}</Tooltip>
              ) : null}
              <IconButton
                ariaLabel="cancel"
                backgroundColor="darkgray"
                color={IconColor.ORANGE}
                icon={IconName.XMARK}
                size="sm"
                cssExtend={styles.iconButton}
                onClick={onOpenCancelModal}
                onMouseEnter={() => setShowArchiveTooltip(true)}
                onMouseLeave={() => setShowArchiveTooltip(false)}
              />
            </div>

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
