import React, { FC } from 'react';
import { Asset } from 'react-native-image-picker';
import {
  FullUserProfileDto,
  ICreatePost,
  ProductStatus,
} from '@vse-bude/shared';
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
  useState,
  useAppDispatch,
  useEffect,
  useNavigation,
} from '~/hooks/hooks';
import { products as productsActions } from '~/store/actions';
import { globalStyles } from '~/styles/styles';
import { categoryForDropdown } from '~/helpers/category/format-category-for-dropdown';
import { ButtonsContainer } from '~/screens/components/components';
import { ButtonAppearance, DataStatus } from '~/common/enums/enums';
import { selectCategories, selectDataStatusProducts } from '~/store/selectors';
import { productsPostSchema } from '~/validation-schemas/validation-schemas';
import { notification } from '~/services/services';
import { makePostParser } from '~/helpers/helpers';
import { CONDITION } from '~/common/constants/constants';
import { AddPhotos } from '../add-photos/add-photos';
import { useStyles } from './styles';

type Props = {
  personalInfo: FullUserProfileDto;
};

const NewItemForm: FC<Props> = ({ personalInfo }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { colors } = useCustomTheme();
  const styles = useStyles();
  const categories = useAppSelector(selectCategories);
  const dataStatusProducts = useAppSelector(selectDataStatusProducts);
  const isLoading = dataStatusProducts === DataStatus.PENDING;
  const formattedCategories =
    categories && categories.length ? categoryForDropdown(categories) : null;

  const { control, errors, handleSubmit } = useAppForm<ICreatePost>({
    defaultValues: {
      category: '',
      title: '',
      description: '',
      condition: '',
      currency: t('common:currency.UAH'),
      price: 0,
      country: personalInfo.userAddress?.country || '',
      city: personalInfo.userAddress?.city || '',
      phone: personalInfo.phone?.replace(/\s/g, '').slice(4) || '',
    },
    validationSchema: productsPostSchema,
  });

  const [images, setImages] = useState<Asset[]>([]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      notification.error(t('errors.CORRECTLY_FILLED'));
    }
  }, [errors]);

  const onSubmit = (data: ICreatePost): void => {
    const payload = makePostParser({
      data,
      images,
      status: ProductStatus.ACTIVE,
    });

    if (payload) {
      dispatch(productsActions.saveProduct(payload))
        .unwrap()
        .then(() => {
          notification.success(t('make_a_post.NEW_POST_CREATED'));
          navigation.goBack();
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.warn(err);
        });
    }
  };

  const handleSaveAsDraftPress = (data: ICreatePost): void => {
    const payload = makePostParser({
      data,
      images,
      status: ProductStatus.DRAFT,
    });

    if (payload) {
      dispatch(productsActions.saveProduct(payload))
        .unwrap()
        .then(() => {
          notification.success(t('make_a_post.NEW_DRAFT_CREATED'));
          navigation.goBack();
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.warn(err);
        });
    }
  };

  return (
    <View>
      <Text style={[globalStyles.fs14, globalStyles.mt5, styles.title]}>
        {t('make_a_post.DOWNLOAD_PHOTOS')}
      </Text>
      <AddPhotos images={images} setImages={setImages} />
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
        required={true}
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
        required={true}
      />
      <DropDown
        label={t('make_a_post.CONDITION')}
        placeholder={t('make_a_post.CONDITION_PLACEHOLDER')}
        name="condition"
        errors={errors}
        control={control}
        items={CONDITION}
        zIndex={19}
        required={true}
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
          required={true}
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
        required={true}
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
        immutableValue="+380"
        name="phone"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        inputStyle={{ paddingLeft: 46 }}
      />
      <ButtonsContainer>
        <View style={styles.buttonContainer}>
          <SecondaryButton
            label={t('make_a_post.SAVE_AS_DRAFT_BUTTON')}
            appearance={ButtonAppearance.OUTLINED}
            textColor={colors.text}
            onPress={handleSubmit(handleSaveAsDraftPress)}
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
