import { Input } from '@components/primitives';
import { Select } from '@components/primitives/select';
import { SectionHeader } from '@components/profile/user-account/common';
import { useTypedSelector } from '@hooks';
import type { CategoryDto } from '@vse-bude/shared';
import { Textarea } from 'components/primitives/textarea';
import { useTranslation } from 'next-i18next';
import type { DescriptionBlockProps } from './types';
import { ConditionFields } from './form-utils';

import * as styles from './styles';

export default function DescriptionBlock({
  errors,
  register,
  category,
  setCategories,
  condition,
  setCondition,
}: DescriptionBlockProps) {
  const categories = useTypedSelector((state) => state.category.list);

  const { t } = useTranslation();

  return (
    <>
      <SectionHeader>{t('create-post:headline.description')}</SectionHeader>
      <div css={styles.inputRow}>
        <Select
          labelRequiredMark
          required
          options={categories.map((item: CategoryDto) => ({
            title: item.title,
            value: item.id,
          }))}
          value={category?.title}
          setValue={setCategories}
          id="post-category"
          name="category"
          label={t('create-post:label.category')}
          placeholder={t('create-post:placeholder.category')}
          error={errors.category?.message}
        />
      </div>
      <div css={styles.inputRow}>
        <Input
          labelRequiredMark
          error={errors.title?.message}
          required
          id="post-title"
          type="text"
          name="title"
          variant="primary"
          label={t('create-post:label.name')}
          placeholder={t('create-post:placeholder.name')}
          {...register('title')}
        />
      </div>
      <div css={styles.inputRow}>
        <Textarea
          labelRequiredMark
          error={errors.description?.message}
          required
          id="post-description"
          name="description"
          label={t('create-post:label.description')}
          placeholder={t('create-post:placeholder.description')}
          {...register('description')}
        />
      </div>
      <div css={styles.inputRow}>
        <Select
          labelRequiredMark
          required
          options={Object.values(ConditionFields(t))}
          value={condition?.title}
          setValue={setCondition}
          id="post-condition"
          name="condition"
          label={t('create-post:label.condition')}
          placeholder={t('create-post:placeholder.condition')}
          error={errors.condition?.message}
          cssDropdownExtend={styles.conditionSelect}
        />
      </div>
    </>
  );
}
