import * as styles from './styles';

export const ItemImage = ({ src, title }: { src: string; title: string }) => (
  <div css={styles.itemImageWrapper}>
    <img css={styles.itemImage} src={src} alt={title} />
  </div>
);
