import type { CategoryDto } from '@vse-bude/shared';
import { Dropdown, Icon } from '@primitives';
import { Routes, IconName, IconColorProps } from '@enums';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as styles from './styles';

interface CategoriesListProps {
  categories: CategoryDto[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const redirectToCategory = (category: string) => {
    const filters = {
      category: category,
    };
    push({
      pathname: Routes.ITEMS,
      query: { filter: JSON.stringify(filters) },
    });
  };

  return (
    <Dropdown
      options={categories.map((item) => ({
        value: item.title,
        key: 'home',
        cssExtend: styles.option,
        onClick: () => {
          redirectToCategory(item.id);
        },
      }))}
    >
      {t('common:header.nav.category')}&nbsp;
      <Icon icon={IconName.ANGLE_DOWN} color={IconColorProps.GRAY} />
    </Dropdown>
  );
};
