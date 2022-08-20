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
    <Popover
      trigger={
        <div css={styles.profileInfo}>
          <Avatar
            firstName={user?.firstName}
            lastName={user?.lastName}
            image={user?.avatar}
            loading={loading}
          />
          <DownArrow style={styles.dropdownArrow} />
        </div>
      }
    >
      <PopoverContent
        wrapperStyles={styles.popoverContentWrapper}
        innerStyles={styles.popoverContentItem}
        handleClick={handleClick}
      />
    </Popover>
  );
};
