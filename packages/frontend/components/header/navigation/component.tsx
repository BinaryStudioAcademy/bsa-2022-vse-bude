import type { CategoryDto } from '@vse-bude/shared';
import { InternalLink } from '@primitives';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Routes } from '@enums';
import { CategoriesList } from './categories-list/component';
import * as styles from './styles';

interface NavigationProps {
  categories: CategoryDto[];
}

export const Navigation = ({ categories }: NavigationProps) => {
  const { t } = useTranslation();
  const { pathname } = useRouter();

  return (
    <nav css={styles.wrapper}>
      <CategoriesList categories={categories} />
      {/* <InternalLink
        href={Routes.NEWS}
        label={t('common:header.nav.news')}
        variant={pathname === Routes.NEWS ? 'primary' : 'default'}
      /> */}
      <InternalLink
        href={Routes.ABOUT}
        label={t('common:header.nav.about_us')}
        variant={pathname === Routes.ABOUT ? 'primary' : 'default'}
      />
    </nav>
  );
};
