import { Button, Flex, Loader } from '@components/primitives';
import { Notification } from '@components/primitives/notification';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { loadMoreUserNotifications } from '@store';
import { NOTIFICATIONS_FILTER } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import * as styles from './styles';

export default function NotificationsWrapper({ viewed }: { viewed: boolean }) {
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
  page * NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT;

  return (
    <div css={styles.notificationsWrapper}>
      {loading ? (
        <Flex justify={'center'}>
          {' '}
          <Loader />
        </Flex>
      ) : (
        <>
          {notifications?.length > 0 ? (
            notifications.map((item) => (
              <Notification notificationData={item} key={item.id} />
            ))
          ) : (
            <p>{t('common:header.notifications.noNotification')}</p>
          )}
          {count > totalNotifications && (
            <Flex justify={'center'}>
              {loadMoreLoading ? (
                <Loader size="small" />
              ) : (
                <Button
                  onClick={() => {
                    dispatch(
                      loadMoreUserNotifications({
                        from: totalNotifications,
                        limit: NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT,
                        viewed,
                      }),
                    );
                    setPage(page + 1);
                  }}
                  size="small"
                >
                  {t('common:header.notifications.loadMore')}
                </Button>
              )}
            </Flex>
          )}
        </>
      )}
    </div>
  );
}
