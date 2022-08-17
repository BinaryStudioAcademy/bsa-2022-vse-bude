import { Popover } from '@primitives';
import { useRouter } from 'next/router';
import { linksData } from 'components/user-account-layout/account-links-data';
import { resetButton } from 'theme';
import { Avatar } from '../avatar';
import type { UserInHeaderProps } from './types';
import * as styles from './styles';
import { DownArrow } from './sub-components/dropdown';

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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
            css={resetButton}
            onClick={handleClick}
            link-label="PERSONAL_INFO"
          >
            Personal Info
          </button>
          <button css={resetButton} onClick={handleClick} link-label="MY_LIST">
            My List
          </button>
          <button css={resetButton} onClick={handleClick} link-label="SETTINGS">
            Settings
          </button>
          <button css={resetButton} onClick={handleClick} link-label="MESSAGES">
            Messages
          </button>
          <button css={resetButton} onClick={handleClick} link-label="SUPPORT">
            Support
          </button>
          <button css={resetButton} onClick={handleClick} link-label="SIGN_OUT">
            Sign Out
          </button>
        </div>
      </Popover>
    </div>
  );
};
