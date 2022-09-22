import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { Input, Column, Flex, Button, Loader } from '@primitives';
import { useState } from 'react';
import { createPostSchema } from 'validation-schemas/post';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect } from 'react';
import { useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { updateProduct } from 'services/product';
import { createPost } from 'services/post';
import { ProductType } from '@vse-bude/shared';
import { Routes } from '@enums';
import type { SelectOption } from '@components/primitives/select/types';
import { initialProductFormState, ConditionFields } from './form-utils';
import ImageInput from './image-input';
import DescriptionBlock from './description';
import * as styles from './styles';
import ContactBlock from './contact';
import type { registerFieldType, setValueType } from './types';
import { PostStatuses } from './types';

export default function ProductForm({ edit }: { edit: boolean }) {
  const { query, push } = useRouter();
  const { t } = useTranslation();
  const currentProduct = useTypedSelector((state) => state.product.currentItem);
  const categories = useTypedSelector((state) => state.category.list);
  const [category, setCategory] = useState<SelectOption>(null);
  const [condition, setCondition] = useState<SelectOption>(null);
  const [images, setImages] = useState<(File | string)[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(PostStatuses.CREATE);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialProductFormState,
    resolver: joiResolver(createPostSchema(t)),
  });

  const onSubmit = async (data) => {
    if (isLoading) return;
    if (images.length < 2) {
      setError(t('create-post:validation.images.few'));

      return;
    }
    if (images.length > 30) {
      setError(t('create-post:validation.images.many'));

      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const formData = new FormData();
      images.forEach((file) => formData.append('images', file));
      formData.append('type', ProductType.SELLING);
      formData.append('status', status);
      Object.keys(data).forEach((key) => {
        switch (key) {
          case 'category':
            formData.append(key, category.value);
            break;
          case 'condition':
            formData.append(key, condition.value);
            break;
          case 'phone':
            formData.append(key, data[key] ? `+380${data[key]}` : '');
            break;
          default:
            formData.append(key, data[key] ?? '');
        }
      });

      if (edit) {
        const editInfo = await updateProduct(query.id as string, formData);
        if (editInfo) push(`${Routes.ITEMS}/${query.id}`);
      } else {
        const { id } = await createPost(formData);
        push(`${Routes.ITEMS}/${id}`);
      }
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
    if (edit && currentProduct && categories.length > 0 && !isLoading) {
      Object.keys(initialProductFormState).forEach((item) => {
        switch (item) {
          case 'category': {
            const currentCategory = categories.find(
              (item) => item.id === currentProduct.category?.id,
            );
            setValue(item, currentCategory?.title);
            setCategory({
              value: currentCategory?.id,
              title: currentCategory?.title,
            });
            break;
          }
          case 'condition': {
            setValue('condition', currentProduct?.condition);
            setCondition(ConditionFields(t)[currentProduct?.condition]);
            break;
          }
          case 'phone':
            setValue('phone', currentProduct.phone.replace('+380', ''));
            break;
          case 'currency':
            setValue('currency', 'UAH');
            break;
          default:
            setValue(item as 'title', currentProduct[item]);
        }
      });
      setImages(currentProduct.imageLinks);
    }
  }, [currentProduct, setValue, edit, categories, isLoading, t]);

  const setCategoryWrapper = (category: SelectOption) => {
    setCategory(category);
    setValue('category', category.value);
  };

  const setConditionWrapper = (condition: SelectOption) => {
    setCondition(condition);
    setValue('condition', condition.value);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <ImageInput images={images} setImages={setImages} />
      <Column css={styles.sectionRow}>
        <DescriptionBlock
          condition={condition}
          setCondition={setConditionWrapper}
          category={category}
          register={register as registerFieldType}
          setCategories={setCategoryWrapper}
          errors={errors}
        />
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
              labelRequiredMark
              tooltip={t('create-post:tooltip.price')}
              id="post-price"
              type="number"
              name="price"
              variant="primary"
              label={t('create-post:label.price')}
              placeholder={t('create-post:placeholder.price')}
              {...register('price')}
            />
          </div>
        </Flex>
      </Column>
      <Column>
        <ContactBlock
          setValue={setValue as setValueType}
          register={register as registerFieldType}
          errors={errors}
        />
      </Column>
      {error && <p css={styles.photosError}>{error}</p>}

      <div css={styles.btnWrapper}>
        {isLoading && (
          <div css={styles.formLoader}>
            <Loader size="big" />
          </div>
        )}
        <div css={styles.saveDraftBtn}>
          {(!edit || currentProduct.status === PostStatuses.DRAFT) && (
            <Button
              onClick={() => setStatus(PostStatuses.DRAFT)}
              type="submit"
              disabled={isLoading}
              variant="outlined"
            >
              {t('create-post:button.saveDraft')}
            </Button>
          )}
        </div>
        <Button
          onClick={() => setStatus(PostStatuses.CREATE)}
          disabled={isLoading}
          type="submit"
        >
          {edit
            ? t('create-post:button.editPost')
            : t('create-post:button.makePost')}
        </Button>
      </div>
    </form>
  );
}
