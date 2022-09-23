import { useAppDispatch, useAuth, useTypedSelector } from '@hooks';
import { Popover, Avatar, Icon, InternalLink } from '@primitives';
import { useRouter } from 'next/router';
import { IconName, IconColor, Routes } from '@enums';
import { useEffect } from 'react';
import { fetchUserNotifications } from '@store';
import { NOTIFICATIONS_FILTER } from '@vse-bude/shared';
import * as styles from './styles';
import { DownArrow } from './sub-components/dropdown';
import { PopoverContent } from './sub-components/popover-content';
import NotificationsWrapper from './notifications-wrapper/component';

interface ProfileInfoProps {
  load: boolean;
}

export const ProfileInfo = ({ load }: ProfileInfoProps) => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`${Routes.PROFILE}/${user.id}`);
  };
  useEffect(() => {
    dispatch(
      fetchUserNotifications({
        limit: NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT,
      }),
    );
  }, [dispatch]);

  const {
    notifications: { countOfUnread },
  } = useTypedSelector((store) => store.profile);

  return (
    <div css={styles.profileInfo} profile-load={load.toString()}>
      <div css={styles.iconsWrapper}>
        {/* change link */}
        <InternalLink href={Routes.DEFAULT} cssExtend={styles.icons}>
          <Icon
            icon={IconName.STAR_OUTLINED}
            size="md"
            color={IconColor.BLACK}
          />
        </InternalLink>

        <Popover
          trigger={
            <Icon
              icon={IconName.BELL}
              size="md"
              color={IconColor.BLACK}
              cssExtend={[countOfUnread && styles.newNotifications]}
            />
          }
        >
          {(handleClose) => <NotificationsWrapper handleClose={handleClose} />}
        </Popover>
      </div>
      <Avatar
        firstName={user?.firstName}
        lastName={user?.lastName}
        image={user?.avatar}
        loading={loading}
        handleClick={handleClick}
      />
      <Popover
        trigger={({ isOpen }) => (
          <DownArrow style={styles.dropdownArrow} isOpen={isOpen} />
        )}
        triggerWrapperCssExtend={styles.popoverTriggerWrapper}
      >
        {(handleClose) => (
          <PopoverContent user={user} handleClose={handleClose} />
        )}
      </Popover>
    </div>
  );
};
