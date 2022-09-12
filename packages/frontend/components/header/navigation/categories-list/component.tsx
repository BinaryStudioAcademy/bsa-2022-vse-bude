import type { CategoryDto } from '@vse-bude/shared';
import { Dropdown, Icon } from '@primitives';
import { Routes, IconName, IconColor } from '@enums';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import * as styles from './styles';

interface CategoriesListProps {
  categories: CategoryDto[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const redirectToCategory = (categoryId: string) => {
    const filters = {
      categoryId,
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
        key: item.id,
        cssExtend: styles.option,
        onClick: () => {
          redirectToCategory(item.id);
        },
      }))}
      onChildrenClick={() => setIsOpen(!isOpen)}
      cssExtend={styles.wrapper}
    >
      {t('common:header.nav.category')}&nbsp;
      {isOpen ? (
        <Icon icon={IconName.ANGLE_UP} color={IconColor.BLACK} />
      ) : (
        <Icon icon={IconName.ANGLE_DOWN} color={IconColor.BLACK} />
      )}
    </Dropdown>
  );
};
