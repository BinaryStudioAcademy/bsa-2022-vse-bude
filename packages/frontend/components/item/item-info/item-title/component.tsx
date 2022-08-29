import { ViewCounter } from './view-counter/component';
import * as styles from './styles';

interface InfoTitleProps {
  title: string;
  views: number;
}

export const ItemTitle = ({ title, views }: InfoTitleProps) => (
  <div css={styles.wrapper}>
    <h3>{title}</h3>
    <ViewCounter viewsCount={views} />
  </div>
);
