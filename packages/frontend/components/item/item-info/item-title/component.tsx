import { ViewCounter } from './view-counter/component';
import * as styles from './styles';

interface InfoTitleProps {
  title: string;
}

export const ItemTitle = ({ title }: InfoTitleProps) => (
  <div css={styles.wrapper}>
    <h3>{title}</h3>
    <ViewCounter viewsCount="500" />
  </div>
);
