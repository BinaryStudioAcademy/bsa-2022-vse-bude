import { Popover } from '@primitives';
import { useRouter } from 'next/router';
import { Avatar } from '../avatar';
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
    <Popover
      trigger={
        <div css={styles.profileInfo}>
          <Avatar firstName={firstName} lastName={lastName} image={image} />
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
