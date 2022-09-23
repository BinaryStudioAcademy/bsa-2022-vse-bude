import { IconColor, IconName, Routes } from '@enums';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { updateNotificationView } from '@store';
import type { NotificationDto } from '@vse-bude/shared';
import dayjs from 'dayjs';
import { Flex } from 'grapefruit-ui';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { IconButton } from '../icon-button';
import { Loader } from '../loader';
import { Tooltip } from '../tooltip';
import * as styles from './styles';

export const Notification = ({
  notificationData,
}: {
  notificationData: NotificationDto;
}) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { updateViewLoading } = useTypedSelector((state) => state.profile);
  const { title, createdAt, description, id, productId, viewed } =
    notificationData;

  return (
    <div data-variant={viewed ? 'read' : 'unread'} css={styles.wrapper}>
      <div css={styles.titleWrapper}>
        <h5 css={styles.title}> {title} </h5>

        <div css={styles.viewBtn}>
          {updateViewLoading === id ? (
            <Loader size="extraSmall" />
          ) : (
            <>
              {viewed ? (
                <IconButton
                  ariaLabel={t('common:header.notifications.ariaLabel.viewed')}
                  icon={IconName.CHECK}
                  color={IconColor.YELLOW}
                />
              ) : (
                <IconButton
                  ariaLabel={t(
                    'common:header.notifications.ariaLabel.setViewed',
                  )}
                  disabled={!!updateViewLoading}
                  icon={IconName.XMARK}
                  color={IconColor.GRAY}
                  onClick={() => dispatch(updateNotificationView(id))}
                />
              )}
            </>
          )}
        </div>
      </div>
      <p css={styles.description}>{description}</p>
      <Flex justify={'space-between'} align={'center'}>
        <Flex>
          {/* TODO: add author link */}
          {/* {userId && (
            <IconButton
              ariaLabel="user info"
              icon={IconName.USER}
              color={IconColor.GRAY}
              onClick={() => push(`${Routes.PROFILE}/${userId}`)}
            />
          )} */}
          {productId && (
            <Tooltip
              trigger={
                <IconButton
                  ariaLabel={t(
                    'common:header.notifications.tooltip.productBtn',
                  )}
                  icon={IconName.SHOPPING_BAG}
                  color={IconColor.GRAY}
                  onClick={() => push(`${Routes.ITEMS}/${productId}`)}
                />
              }
            >
              {t('common:header.notifications.tooltip.productBtn')}
            </Tooltip>
          )}
        </Flex>
        <p css={styles.time}>
          <span>
            {`${dayjs(createdAt).hour()}:${(
              '0' + dayjs(createdAt).minute()
            ).slice(-2)}`}
          </span>
          {`${('0' + dayjs(createdAt).date()).slice(-2)}.${(
            '0' +
            (dayjs(createdAt).month() + 1)
          ).slice(-2)}.${dayjs(createdAt).year()}`}
        </p>
      </Flex>
    </div>
  );
};
