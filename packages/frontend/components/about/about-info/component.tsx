import { useRouter } from 'next/router';
import { AboutItem } from '../about-item/component';
import { NestedLayout } from './common';
import * as styles from './styles';

export const AboutUsInfo = () => {
  const { locale } = useRouter();
  let contributors;
  locale == 'en'
    ? (contributors = require('../../../public/locales/en/team.json'))
    : (contributors = require('../../../public/locales/ua/team.json'));

  return (
    <NestedLayout>
      <div css={styles.wrapper}>
        {contributors.map((contributor, key) => (
          <AboutItem
            key={key}
            image={contributor.photo}
            name={contributor.name}
            role={contributor.role}
          />
        ))}
      </div>
    </NestedLayout>
  );
};
