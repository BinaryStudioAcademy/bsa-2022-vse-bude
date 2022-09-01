import { useAuth } from '@hooks';
import { Popover, Avatar, Icon, InternalLink } from '@primitives';
import { useRouter } from 'next/router';
import { IconName, IconColorProps, Routes } from '@enums';
import { useState } from 'react';
import * as styles from './styles';
import { DownArrow } from './sub-components/dropdown';
import { PopoverContent } from './sub-components/popover-content';

export const ProfileInfo = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`${Routes.PROFILE}/${user.id}`);
  };

  const newNotifications = true;

  const renderNotifications = () => <div>Notifications!</div>;

  return (
    <div css={styles.profileInfo}>
      <div css={styles.iconsWrapper}>
        {/* change link */}
        <InternalLink href={Routes.DEFAULT} cssExtend={styles.icons}>
          <Icon
            icon={IconName.STAR_OUTLINED}
            size="md"
            color={IconColorProps.BLACK}
          />
        </InternalLink>

        <Popover
          trigger={
            <Icon
              icon={IconName.BELL}
              size="md"
              color={IconColorProps.BLACK}
              cssExtend={[newNotifications && styles.newNotifications]}
            />
          }
        >
          {() => renderNotifications()}
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
        trigger={
          <DownArrow
            style={styles.dropdownArrow}
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        }
      >
        {(handleClose) => <PopoverContent handleClose={handleClose} />}
      </Popover>
    </div>
  );
};
