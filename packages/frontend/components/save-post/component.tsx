import { useTranslation } from 'next-i18next';
import { Container } from '@primitives';
import { NestedLayout } from '../profile/user-account/common';
import PostForm from './form';
import * as styles from './styles';

export const SavePost = ({
  create,
  edit,
}: {
  create: string;
  edit?: boolean;
}) => {
  const { t } = useTranslation();
  console.log(create);

  const title = edit
    ? t('create-post:headline.editPost')
    : t('create-post:headline.makePost');

  return (
    <NestedLayout>
      <Container>
        <h3 css={styles.pageHeader}>{title}</h3>
        <div css={styles.form}>
          <div css={styles.sections}>
            <PostForm edit={edit} />
          </div>
        </div>
      </Container>
    </NestedLayout>
  );
};
