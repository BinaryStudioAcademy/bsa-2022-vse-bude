import { Popover } from '@primitives';
import { useRouter } from 'next/router';
import { Avatar } from '../../primitives/avatar';
import type { ProfileInfoProps } from './types';
import * as styles from './styles';
import { DownArrow } from './sub-components/dropdown';
import { PopoverContent } from './sub-components/popover-content';

export const ProfileInfo = ({
  image,
  firstName,
  lastName,
}: ProfileInfoProps) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(e.target.getAttribute('path-label'));
  };

  return (
    <div css={styles.profileInfo}>
      <Avatar
        firstName={firstName}
        lastName={lastName}
        image={image}
        handleClick={handleClick}
      />
      <Popover trigger={<DownArrow style={styles.dropdownArrow} />}>
        <PopoverContent
          wrapperStyles={styles.popoverContentWrapper}
          innerStyles={styles.popoverContentItem}
        />
      </Popover>
    </div>
  );
};
