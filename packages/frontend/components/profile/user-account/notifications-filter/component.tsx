import { useTranslation } from 'next-i18next';
import { Button, Flex, Loader } from '@components/primitives';
import { Notification } from '@components/primitives/notification';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { loadMoreUserNotifications } from '@store';
import { NOTIFICATIONS_FILTER } from '@vse-bude/shared';
import { useState } from 'react';
import { SubPageName } from '../common';
import * as styles from './styles';

export default function NotificationsFilter() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    notifications: { notifications, count },
    loadMoreLoading,
    loading,
  } = useTypedSelector((store) => store.profile);
  const [page, setPage] = useState(1);

  const totalNotifications =
    page * NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT;

  const loadMoreHandler = () => {
    dispatch(
      loadMoreUserNotifications({
        from: totalNotifications,
        limit: NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT,
      }),
    );
    setPage(page + 1);
  };

  return (
    <Flex
      css={styles.notificationsFilter}
      align={'stretch'}
      flex={'max-content'}
      direction={'column'}
    >
      <div css={styles.pageNameWrapper}>
        <SubPageName>{t('account:notifications')}</SubPageName>
      </div>

      {loading ? (
        <Flex justify={'center'}>
          <Loader size="big" />
        </Flex>
      ) : (
        <>
          <div css={styles.notificationsWrapper}>
            {notifications?.length > 0 ? (
              notifications.map((item) => (
                <Notification notificationData={item} key={item.id} />
              ))
            ) : (
              <p css={styles.noNotifications}>
                {t('common:header.notifications.noNotification')}
              </p>
            )}
          </div>

          <Flex justify={'center'}>
            {loadMoreLoading && <Loader size="small" />}
            {count > totalNotifications && !loadMoreLoading && (
              <Button
                onClick={loadMoreHandler}
                aria-label={t('common:header.notifications.loadMore')}
              >
                {t('common:header.notifications.loadMore')}
              </Button>
            )}
          </Flex>
        </>
      )}
    </Flex>
  );
}
