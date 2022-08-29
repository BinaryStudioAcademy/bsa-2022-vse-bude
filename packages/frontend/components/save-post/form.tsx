import { Textarea } from 'components/primitives/textarea';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { Input, Column, Flex, Button, Loader } from '@primitives';
import { SectionHeader } from '../profile/user-account/common';
import { useState } from 'react';
import { createPostSchema } from 'validation-schemas/post';
import { joiResolver } from '@hookform/resolvers/joi';
import { createPost } from 'services/post';
import { initialFormState } from './form-utils';
import ImageInput from './image-input';
import * as styles from './styles';

export default function PostForm() {
  const { t } = useTranslation();
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialFormState,
    resolver: joiResolver(createPostSchema(t)),
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      const formData = new FormData();
      images.forEach((file) => formData.append('images', file));
      Object.keys(data).forEach((key) => formData.append(key, data[key]));

      console.log(await createPost(formData));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }

      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageInput images={images} setImages={setImages} />

      <Column css={styles.sectionRow}>
        <SectionHeader>{t('create-post:headline.description')}</SectionHeader>
        <div css={styles.inputRow}>
          <Input
            id="post-category"
            type="text"
            name="category"
            variant="primary"
            label={t('create-post:label.category')}
            placeholder={t('create-post:placeholder.category')}
            {...register('category')}
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
        <Flex css={styles.groupInputs}>
          <div css={styles.smallInputRow}>
            <Input
              disabled
              id="post-currency"
              type="text"
              name="currency"
              variant="primary"
              label={t('create-post:label.currency')}
              value={t('create-post:placeholder.currency')}
              {...register('currency')}
            />
          </div>
          <div css={styles.inputRow}>
            <Input
              error={errors.price?.message}
              required
              tooltip={t('create-post:tooltip.price')}
              id="post-price"
              type="text"
              name="price"
              variant="primary"
              label={t('create-post:label.price')}
              placeholder={t('create-post:placeholder.price')}
              {...register('price')}
            />
          </div>
        </Flex>
      </Column>
      <Column css={styles.sectionRow}>
        <SectionHeader>{t('create-post:headline.contact')}</SectionHeader>

        <Flex css={styles.groupInputs}>
          <div css={styles.inputRow}>
            <Input
              labelRequiredMark
              error={errors.country?.message}
              required
              id="post-country"
              type="text"
              name="country"
              variant="primary"
              label={t('create-post:label.country')}
              placeholder={t('create-post:placeholder.country')}
              {...register('country')}
            />
          </div>
          <div css={styles.inputRow}>
            <Input
              id="post-city"
              type="text"
              name="city"
              variant="primary"
              label={t('create-post:label.city')}
              placeholder={t('create-post:placeholder.city')}
              {...register('city')}
            />
          </div>
        </Flex>
        <Flex css={styles.groupInputs}>
          <div css={styles.smallInputRow}>
            <Input
              disabled
              id="post-callingCode"
              type="text"
              name="callingCode"
              variant="primary"
              label={t('create-post:label.callingCode')}
              value={t('create-post:placeholder.callingCode')}
              {...register('callingCode')}
            />
          </div>
          <div css={styles.inputRow}>
            <Input
              tooltip={t('create-post:tooltip.phone')}
              error={errors.phone?.message}
              id="post-phone"
              type="text"
              name="phone"
              variant="primary"
              label={t('create-post:label.phone')}
              placeholder={t('create-post:placeholder.phone')}
              {...register('phone')}
            />
          </div>
        </Flex>
        <div css={styles.inputRow}>
          <Input
            id="post-instagram"
            type="text"
            name="instagram"
            variant="primary"
            label={t('create-post:label.instagram')}
            placeholder={t('create-post:placeholder.instagram')}
            {...register('instagram')}
          />
        </div>
        <div css={styles.inputRow}>
          <Input
            id="post-facebook"
            type="text"
            name="facebook"
            variant="primary"
            label={t('create-post:label.facebook')}
            placeholder={t('create-post:placeholder.facebook')}
            {...register('facebook')}
          />
        </div>
        <div css={styles.inputRow}>
          <Input
            id="post-site"
            type="text"
            name="site"
            variant="primary"
            label={t('create-post:label.site')}
            placeholder={t('create-post:placeholder.site')}
            {...register('site')}
          />
        </div>
      </Column>
      {error && <p css={styles.photosError}>{error}</p>}

      <div css={styles.btnWrapper}>
        {isLoading && (
          <div css={styles.formLoader}>
            <Loader size="big" />
          </div>
        )}
        <div css={styles.saveDraftBtn}>
          <Button disabled={isLoading} variant="outlined">
            {t('create-post:button.saveDraft')}
          </Button>
        </div>
        <Button disabled={isLoading} type="submit">
          {t('create-post:button.makePost')}
        </Button>
      </div>
    </form>
  );
}
