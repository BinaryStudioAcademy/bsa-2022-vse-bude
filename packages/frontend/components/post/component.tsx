import { useTranslation } from 'next-i18next';
import { Container } from '@primitives';
import { NestedLayout } from 'components/sub-pages/common';
import ImageInput from './image-input';
import PostForm from './form';
import * as styles from './styles';

export const Post = ({ create }: { create: string }) => {
  const { t } = useTranslation();
  console.log(create);

  return (
    <NestedLayout>
      <Container>
        <h3 css={styles.pageHeader}>{t('create-post:headline.makePost')}</h3>
        <div css={styles.form}>
          <div css={styles.sections}>
            <ImageInput />
            <PostForm />
          </div>
        </div>
      </Container>
    </NestedLayout>
  );
};
