import React, { FC } from 'react';
import { Asset } from 'react-native-image-picker';
import {
  ColorPalette,
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
  CheckBox,
  Pressable,
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
  useRef,
} from '~/hooks/hooks';
import { products as productsActions } from '~/store/actions';
import { globalStyles } from '~/styles/styles';
import { DatePicker } from '~/components/date-time-picker/date-time-picker';
import { ButtonAppearance, DateTimeType } from '~/common/enums/ui/ui';
import { categoryForDropdown } from '~/helpers/category/format-category-for-dropdown';
import { ButtonsContainer } from '~/screens/components/components';
import { selectCategories, selectDataStatusProducts } from '~/store/selectors';
import { DataStatus } from '~/common/enums/enums';
import { productsAuctionSchema } from '~/validation-schemas/validation-schemas';
import { notification } from '~/services/services';
import { makeAuctionParser } from '~/helpers/helpers';
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
  const dataStatusProducts = useAppSelector(selectDataStatusProducts);
  const isLoading = dataStatusProducts === DataStatus.PENDING;
  const formattedCategories =
    categories && categories.length ? categoryForDropdown(categories) : null;
  const phone = personalInfo.phone?.replace(/\s/g, '').slice(4);

  const { control, errors, handleSubmit, setValue } =
    useAppForm<ICreateAuction>({
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
        country: personalInfo.userAddress?.country || '',
        city: personalInfo.userAddress?.city || '',
        phone: phone || '',
      },
      validationSchema: productsAuctionSchema,
    });
  const [images, setImages] = useState<Asset[]>([]);
  const [hiddenPhone, setHiddenPhone] = useState(Boolean(false));
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      notification.error(t('errors.CORRECTLY_FILLED'));
    }
  }, [errors]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    if (hiddenPhone) {
      setValue('phone', '');
    } else {
      setValue('phone', phone || '');
    }
  }, [hiddenPhone]);

  const onSubmit = (data: ICreateAuction): void => {
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
          popoverText={t('make_a_post.RECOMMENDED_PRICE_POPOVER')}
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
          popoverText={t('make_a_post.MINIMAL_BID_POPOVER')}
        />
      </View>
      <DatePicker
        label={t('make_a_post.ENDING_DATE')}
        name="endDate"
        control={control}
        errors={errors}
        placeholder={'-/-/-'}
        mode={DateTimeType.DATE}
        contentContainerStyle={globalStyles.mt5}
        required={true}
      />
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
        popoverText={t('make_a_post.PHONE_POPOVER')}
        inputStyle={{ paddingLeft: 46 }}
      />
      <View style={[globalStyles.mt3]}>
        <Pressable
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
            { alignSelf: 'flex-start' },
          ]}
          onPress={() => setHiddenPhone(!hiddenPhone)}
        >
          <CheckBox
            tintColors={{
              true: ColorPalette.YELLOW_100,
              false: ColorPalette.YELLOW_100,
            }}
            disabled={true}
            value={hiddenPhone}
          />
          <Text style={globalStyles.fs14}>{t('make_a_post.HIDE_PHONE')}</Text>
        </Pressable>
      </View>
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
