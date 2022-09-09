import logo from './charity-logo.svg';
import * as styles from './styles';

const name = 'International Charity Organization';

export const Charity = () => (
  <div css={styles.charityWrapper}>
    <div css={styles.logoWrapper}>
      <img css={styles.logo} src={logo.src} alt={name} />
    </div>
    <div css={styles.nameWrapper}>
      <span css={styles.name}>{name}</span>
    </div>
  </div>
);
