import { Button, Flex, Loader } from '@components/primitives';
import { Notification } from '@components/primitives/notification';
import { useTypedSelector } from '@hooks';
import { useTranslation } from 'next-i18next';
import { NOTIFICATIONS_FILTER } from '@vse-bude/shared';
import { useRouter } from 'next/router';
import { ProfileRoutes, Routes } from '@enums';
import * as styles from './styles';

export default function NotificationsWrapper({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const { t } = useTranslation();
  const { push } = useRouter();
  const {
    loading,
    notifications: { notifications },
  } = useTypedSelector((store) => store.profile);
  const onClickHandler = () => {
    push(Routes.PROFILE + ProfileRoutes.NOTIFICATIONS);
    handleClose();
  };

  if (loading) {
    return (
      <div css={styles.notificationsWrapper}>
        <Flex justify={'center'}>
          <Loader />
        </Flex>
      </div>
    );
  }

  return (
    <div css={styles.notificationsWrapper}>
      {notifications?.length > 0 ? (
        <>
          {notifications
            .filter(
              (_, index) =>
                index < NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT,
            )
            .map((item) => (
              <div key={item.id} css={styles.notificationWrapper}>
                <Notification notificationData={item} />
              </div>
            ))}
          <Flex justify={'center'}>
            <Button
              aria-label={t(
                'common:header.notifications.ariaLabel.toNotifications',
              )}
              size="small"
              onClick={onClickHandler}
            >
              {t('common:header.notifications.toNotificationsBtn')}
            </Button>
          </Flex>
        </>
      ) : (
        <p css={styles.noNotifications}>
          {t('common:header.notifications.noNotification')}
        </p>
      )}
    </div>
  );
}
