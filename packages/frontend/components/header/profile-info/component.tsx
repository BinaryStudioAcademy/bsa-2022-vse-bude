import { useAuth } from '@hooks';
import { Popover, Avatar } from '@primitives';
import { useRouter } from 'next/router';
import * as styles from './styles';
import { DownArrow } from './sub-components/dropdown';
import { PopoverContent } from './sub-components/popover-content';

export const ProfileInfo = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(e.target.getAttribute('path-label'));
  };

  return (
    <div css={styles.profileInfo}>
      <Avatar
        firstName={user.firstName}
        lastName={user.lastName}
        image={user.avatar}
        loading={loading}
        handleClick={handleClick}
      />
      <Popover trigger={<DownArrow style={styles.dropdownArrow} />}>
        {(handleClose) => <PopoverContent handleClose={handleClose} />}
      </Popover>
    </div>
  );
};
