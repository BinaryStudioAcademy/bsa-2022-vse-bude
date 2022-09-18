import { AboutItem } from '../about-item/component';
import { NestedLayout } from './common';
import * as styles from './styles';
import type { ContributorsProps } from './types';

export const AboutUsInfo = ({ contributors }: ContributorsProps) => (
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
