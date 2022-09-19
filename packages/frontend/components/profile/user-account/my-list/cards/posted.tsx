import { useState } from 'react';
import { IconButton } from '@primitives';
import { IconColor, IconName } from '@enums';
import { useTranslation } from 'next-i18next';
import { setVisabilityCancelModal, setItemId } from '@store';
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
} from '../primitives';
import type { CardProps } from './types';
import * as styles from './styles';

export const Posted = ({ data }: CardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { id, title, imageLinks, price, description, views, postDate } = data;
  const router = useRouter();

  const onOpenCancelModal = () => {
    dispatch(setVisabilityCancelModal());
    dispatch(setItemId(id));
  };

  const onEditClick = () => {
    router.push(`${ApiRoutes.ITEMS}/${ProductApiRoutes.EDIT}/${id}`);
  };

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <ItemDescription description={description} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.posted')} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <ItemDate time={postDate} />
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
            <div css={styles.archiveButtonWrapper}>
              {showTooltip ? (
                <Tooltip>{t('my-list:card.tooltip-xmark')}</Tooltip>
              ) : null}
              <IconButton
                ariaLabel="cancel"
                backgroundColor="darkgray"
                color={IconColor.ORANGE}
                icon={IconName.XMARK}
                size="sm"
                onClick={onOpenCancelModal}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
