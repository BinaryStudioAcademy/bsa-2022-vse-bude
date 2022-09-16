import React, { FC } from 'react';
import { IPostForms } from '@vse-bude/shared';
import {
  DropDown,
  Input,
  Text,
  View,
  SecondaryButton,
  PrimaryButton,
} from '~/components/components';
import {
  useAppForm,
  useAppSelector,
  useTranslation,
  useCustomTheme,
} from '~/hooks/hooks';
import { CONDITION } from '~/mock/new-item';
import { globalStyles } from '~/styles/styles';
import { categoryForDropdown } from '~/helpers/category/format-category-for-dropdown';
import { ButtonsContainer } from '~/screens/components/components';
import { ButtonAppearance, DataStatus } from '~/common/enums/enums';
import { selectCategories, selectDataStatusProducts } from '~/store/selectors';
import { productsPostSchema } from '~/validation-schemas/validation-schemas';
import { AddPhotos } from '../add-photos/add-photos';

import { useStyles } from './styles';

const NewItemForm: FC = () => {
  const { t } = useTranslation();
  const { colors } = useCustomTheme();
  const styles = useStyles();
  const categories = useAppSelector(selectCategories);
  const dataStatusProducts = useAppSelector(selectDataStatusProducts);
  const isLoading = dataStatusProducts === DataStatus.PENDING;
  const formattedCategories =
    categories && categories.length ? categoryForDropdown(categories) : null;

  const { control, errors, handleSubmit } = useAppForm<IPostForms>({
    defaultValues: {
      category: '',
      title: '',
      description: '',
      condition: undefined,
      currency: t('common:currency.UAH'),
      price: 0,
      country: '',
      city: '',
      phone: '+380',
    },
    validationSchema: productsPostSchema,
  });

  const handleSaveAsDraftPress = (): void => {
    //TODO save as draft
  };

  const onSubmit = (): void => {
    //TODO make a post
  };

  return (
    <View>
      <Text style={[globalStyles.fs14, globalStyles.mt5, styles.title]}>
        {t('make_a_post.DOWNLOAD_PHOTOS')}
      </Text>
      <AddPhotos />
      <Text style={[globalStyles.fs14, globalStyles.mt5, styles.title]}>
        {t('make_a_post.DESCRIPTION')}
      </Text>
      {formattedCategories && (
        <DropDown
          label={t('make_a_post.CATEGORY')}
          placeholder={t('make_a_post.CATEGORY_PLACEHOLDER')}
          name="category"
          errors={errors}
          control={control}
          items={formattedCategories}
          zIndex={19}
        />
      )}
      <Input
        label={t('make_a_post.TITLE_NAME')}
        placeholder={t('make_a_post.TITLE_NAME_PLACEHOLDER')}
        name="title"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        requiredMark={true}
      />
      <Input
        label={t('make_a_post.DESCRIPTION')}
        placeholder={t('make_a_post.DESCRIPTION_PLACEHOLDER')}
        name="description"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        inputStyle={styles.textArea}
        multiline={true}
        numberOfLines={6}
        requiredMark={true}
      />
      <DropDown
        label={t('make_a_post.CONDITION')}
        placeholder={t('make_a_post.CONDITION_PLACEHOLDER')}
        name="condition"
        errors={errors}
        control={control}
        items={CONDITION}
        zIndex={19}
        requiredMark={true}
      />
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentSpaceBetween,
        ]}
      >
        <Input
          label={t('make_a_post.CURRENCY')}
          name="currency"
          control={control}
          errors={errors}
          editable={false}
          contentContainerStyle={[styles.currencyField, globalStyles.mt5]}
        />
        <Input
          label={t('make_a_post.PRICE')}
          placeholder="0"
          name="price"
          control={control}
          errors={errors}
          contentContainerStyle={[globalStyles.mt5, { width: '65%' }]}
          requiredMark={true}
          isPopover={true}
          popoverText={t('make_a_post.PRICE_POPOVER')}
        />
      </View>
      <Text style={[globalStyles.fs14, globalStyles.mt6, styles.title]}>
        {t('make_a_post.CONTACT')}
      </Text>
      <Input
        label={t('personal_info.COUNTRY')}
        placeholder={t('personal_info.COUNTRY_HINT')}
        name="country"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        requiredMark={true}
      />
      <Input
        label={t('personal_info.CITY')}
        placeholder={t('personal_info.CITY_HINT')}
        name="city"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('verification.PHONE_NUMBER')}
        placeholder={t('verification.PHONE_NUMBER_HINT')}
        name="phone"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        isPopover={true}
        popoverText={t('make_a_post.PHONE_POPOVER')}
      />
      <ButtonsContainer>
        <View style={styles.buttonContainer}>
          <SecondaryButton
            label={t('make_a_post.SAVE_AS_DRAFT_BUTTON')}
            appearance={ButtonAppearance.OUTLINED}
            textColor={colors.text}
            onPress={handleSaveAsDraftPress}
            disabled={isLoading}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            label={t('make_a_post.MAKE_POST_BUTTON')}
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading}
          />
        </View>
      </ButtonsContainer>
    </View>
  );
};

export { NewItemForm };
