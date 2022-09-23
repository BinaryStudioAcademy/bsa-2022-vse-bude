import React, { FC } from 'react';
import { Asset } from 'react-native-image-picker';
import {
  FullUserProfileDto,
  ICreateAuction,
  ProductStatus,
} from '@vse-bude/shared';
import {
  DropDown,
  Input,
  Text,
  View,
  PrimaryButton,
  SecondaryButton,
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
  useMemo,
} from '~/hooks/hooks';
import { products as productsActions } from '~/store/actions';
import { globalStyles } from '~/styles/styles';
import { DatePicker } from '~/components/date-time-picker/date-time-picker';
import { ButtonAppearance, DateTimeType } from '~/common/enums/ui/ui';
import { ButtonsContainer } from '~/screens/components/components';
import { selectCategories, productsDataStatus } from '~/store/selectors';
import { DataStatus } from '~/common/enums/enums';
import { productsAuctionSchema } from '~/validation-schemas/validation-schemas';
import { notification } from '~/services/services';
import { categoryForDropdown, makeAuctionParser } from '~/helpers/helpers';
import { CONDITION } from '~/common/constants/products';
import { AddPhotos } from '../add-photos/add-photos';

import { useStyles } from './styles';

type Props = {
  personalInfo: FullUserProfileDto;
};

const NewAuctionForm: FC<Props> = ({ personalInfo }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { colors } = useCustomTheme();
  const styles = useStyles();
  const categories = useAppSelector(selectCategories);
  const dataStatusProducts = useAppSelector(productsDataStatus);
  const isLoading = dataStatusProducts === DataStatus.PENDING;

  const formattedCategories = useMemo(
    () => categoryForDropdown(categories),
    [categories],
  );

  const { control, errors, handleSubmit } = useAppForm<ICreateAuction>({
    defaultValues: {
      category: '',
      title: '',
      description: '',
      condition: '',
      recommendedPriceCurrency: t('common:currency.UAH'),
      recommendedPrice: 0,
      minimalBidCurrency: t('common:currency.UAH'),
      minimalBid: 0,
      endDate: '',
      country:
        personalInfo.userAddress?.country || t('make_a_post.DEFAULT_COUNTRY'),
      city: personalInfo.userAddress?.city || '',
      phone: personalInfo.phone?.replace(/\s/g, '').slice(4) || '',
    },
    validationSchema: productsAuctionSchema,
  });
  const [images, setImages] = useState<Asset[]>([]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      notification.error(t('errors.CORRECTLY_FILLED'));
    }
  }, [errors]);

  const onSubmit = (data: ICreateAuction): void => {
    if (images.length < 2) {
      notification.error(t('errors.FEW_IMAGES'));

      return;
    }

    const payload = makeAuctionParser({
      data,
      images,
      status: ProductStatus.ACTIVE,
    });

    if (payload) {
      dispatch(productsActions.saveProduct(payload))
        .unwrap()
        .then(() => {
          notification.success(t('make_a_post.NEW_AUCTION_CREATED'));
          navigation.goBack();
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.warn(err);
        });
    }
  };

  const handleSaveAsDraftPress = (data: ICreateAuction): void => {
    const payload = makeAuctionParser({
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
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.mt5,
          { height: 16 },
        ]}
      >
        <Text style={[globalStyles.fs14, styles.title]}>
          {t('make_a_post.DOWNLOAD_PHOTOS')}
        </Text>
        <Text
          style={[
            styles.required,
            globalStyles.ml1,
            globalStyles.fs22,
            {
              color: colors.accent,
            },
          ]}
        >
          *
        </Text>
      </View>
      <Text style={[globalStyles.fs12, globalStyles.mt1, styles.title]}>
        {t('make_a_post.SUBTITLE_PHOTOS')}
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
        placeholder={t('make_a_post.TITLE_NAME_PLACEHOLDER_AUCTION')}
        name="title"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        required={true}
      />
      <Input
        label={t('make_a_post.DESCRIPTION')}
        placeholder={t('make_a_post.DESCRIPTION_PLACEHOLDER_AUCTION')}
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
          name="recommendedPriceCurrency"
          control={control}
          errors={errors}
          editable={false}
          contentContainerStyle={[styles.currencyField, globalStyles.mt5]}
        />
        <Input
          label={t('make_a_post.RECOMMENDED_PRICE')}
          placeholder="0"
          name="recommendedPrice"
          control={control}
          errors={errors}
          contentContainerStyle={[globalStyles.mt5, { width: '65%' }]}
          required={true}
        />
      </View>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentSpaceBetween,
        ]}
      >
        <Input
          label={t('make_a_post.CURRENCY')}
          name="minimalBidCurrency"
          control={control}
          errors={errors}
          editable={false}
          contentContainerStyle={[styles.currencyField, globalStyles.mt5]}
        />
        <Input
          label={t('make_a_post.MINIMAL_BID')}
          placeholder="0"
          name="minimalBid"
          control={control}
          errors={errors}
          contentContainerStyle={[globalStyles.mt5, { width: '65%' }]}
          required={true}
        />
      </View>
      <DatePicker
        label={t('make_a_post.ENDING_DATE')}
        name="endDate"
        control={control}
        errors={errors}
        placeholder={t('make_a_post.ENDING_DATE_PLACEHOLDER')}
        mode={DateTimeType.DATE_TIME}
        contentContainerStyle={globalStyles.mt5}
        required={true}
      />
      <Text style={[globalStyles.fs14, globalStyles.mt6, styles.title]}>
        {t('make_a_post.CONTACTS')}
      </Text>
      <Input
        label={t('personal_info.COUNTRY')}
        name="country"
        control={control}
        errors={errors}
        editable={false}
        contentContainerStyle={globalStyles.mt5}
        required={true}
      />
      <Input
        label={t('make_a_post.CITY')}
        placeholder={t('make_a_post.CITY_PLACEHOLDER')}
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
            label={t('make_a_post.MAKE_AUCTION_BUTTON')}
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading}
          />
        </View>
      </ButtonsContainer>
    </View>
  );
};

export { NewAuctionForm };
