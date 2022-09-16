import Image from 'next/future/image';
import * as styles from './styles';

interface AboutItemProps {
  image: string;
  name: string;
  role: string;
}

const AboutItem = ({ image, name, role }: AboutItemProps) => (
  <>
    <div css={styles.itemsWrapper}>
      <Image
        css={styles.avatar}
        style={{ width: '150px', height: '150px' }}
        src={image}
        alt={name}
        height={150}
        width={150}
        quality={100}
      />
      <div css={styles.descriptionWrapper}>
        <h3 css={styles.nameStyle}>{name}</h3>
        <h3 css={styles.roleStyle}>{role}</h3>
      </div>
    </div>
  </>
);

export { AboutItem };
