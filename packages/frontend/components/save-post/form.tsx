import { Textarea } from 'components/primitives/textarea';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { Input, Column, Flex, Button, Loader, Checkbox } from '@primitives';
import { useState } from 'react';
import { createPostSchema } from 'validation-schemas/post';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { fetchCurrentProduct } from 'store/product';
import { useRouter } from 'next/router';
import { updateProduct } from 'services/product';
import { SectionHeader } from '../profile/user-account/common';
import { initialFormState } from './form-utils';
import ImageInput from './image-input';
import * as styles from './styles';

export default function PostForm({ edit }: { edit: boolean }) {
  const { query, push } = useRouter();

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const currentProduct = useTypedSelector(
    (state) => state.product.currentProduct,
  );
  const categories = useTypedSelector((state) => state.category.list);

  const [images, setImages] = useState<(File | string)[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPhone, setShowPhone] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialFormState,
    resolver: joiResolver(createPostSchema(t)),
  });
  const setShowPhoneWrapper = (value) => {
    setValue('phone', '');
    setShowPhone(value);
  };
  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      const formData = new FormData();
      images
        .filter((item) => typeof item !== 'string')
        .forEach((file) => formData.append('images', file));
      Object.keys(data).forEach((key) => {
        switch (key) {
          case 'category':
            formData.append(key, '0bfc0f51-e082-4dc9-b545-ae0afedbd330');
            break;
          case 'phone':
            formData.append(key, `+380${data[key]}`);
            break;
          default:
            formData.append(key, data[key] ?? '');
        }
      });

      if (edit) {
        await updateProduct(query.id as string, formData);
      }
      push(`/items/${query.id}`);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }

      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (edit && query.id) {
      dispatch(fetchCurrentProduct(query.id as string));
    }
  }, [edit, dispatch, query.id]);

  useEffect(() => {
    if (edit && currentProduct && categories) {
      Object.keys(initialFormState).forEach((item) => {
        switch (item) {
          case 'category':
            setValue(
              item,
              categories.find((item) => item.id === currentProduct.category.id)
                .title,
            );
            break;
          case 'phone':
            setValue('phone', currentProduct.author.phone.replace('+380', ''));
            break;
          default:
            setValue(item as 'title', currentProduct[item]);
        }
      });
      setImages(currentProduct.imageLinks);
    }
  }, [currentProduct, setValue, edit, categories]);

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
              inerasableValue="+380"
              disabled={showPhone}
              {...register('phone')}
            />
          </div>
          <Checkbox
            onChange={setShowPhoneWrapper}
            value={showPhone}
            label={t('create-post:label.checkbox')}
          />
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
          {!edit && (
            <Button disabled={isLoading} variant="outlined">
              {t('create-post:button.saveDraft')}
            </Button>
          )}
        </div>
        <Button disabled={isLoading} type="submit">
          {edit
            ? t('create-post:button.editPost')
            : t('create-post:button.makePost')}
        </Button>
      </div>
    </form>
  );
}
