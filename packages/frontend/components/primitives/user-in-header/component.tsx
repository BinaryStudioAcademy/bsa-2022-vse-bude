import { Popover } from '@primitives';
import { useRouter } from 'next/router';
import { linksData } from 'components/user-account-layout/account-links-data';
import { Avatar } from '../avatar';
import type { UserInHeaderProps } from './types';
import * as styles from './styles';
import { DownArrow } from './sub-components/dropdown';
import { PopoverContent } from './sub-components/popover-content';

export const UserInHeader = ({
  image,
  firstName,
  lastName,
}: UserInHeaderProps) => {
  const router = useRouter();
  console.log(linksData[0].path);

  const handleClick = (e) => {
    e.preventDefault();
    const linkData = linksData.filter(
      (data) => data.label === e.target.getAttribute('link-label'),
    );

    router.push(linkData[0].path);
  };

  return (
    <div css={styles.userInHeader}>
      <Avatar firstName={firstName} lastName={lastName} image={image} />

      <Popover trigger={<DownArrow style={styles.arrowInHeader} />}>
        <PopoverContent
          wrapperStyles={styles.popoverContentWrapper}
          innerStyles={styles.popoverContentItem}
          handleClick={handleClick}
        />
      </Popover>
    </div>
  );
};
