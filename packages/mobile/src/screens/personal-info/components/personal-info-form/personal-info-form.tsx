import React from 'react';
import { FullUserProfileDto, SaveUserProfileDto } from '@vse-bude/shared';
import {
  useAppDispatch,
  useAppForm,
  useAppSelector,
  useTranslation,
  useNavigation,
  useEffect,
  useFormState,
} from '~/hooks/hooks';
import { View, Input, PrimaryButton } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  ButtonAppearance,
  DataStatus,
  RootScreenName,
} from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import {
  selectDataStatusPersonalInfo,
  selectAuthDataStatus,
} from '~/store/selectors';
import { personalInfoActions, auth as authActions } from '~/store/actions';
import { getPersonalInfoSchema } from '~/validation-schemas/validation-schemas';
import { notification } from '~/services/services';
import {
  personalInfoParser,
  updatePersonalInfoParser,
} from '~/helpers/helpers';
import { Title, VerifyField } from '../components';

type Props = {
  personalInfo: FullUserProfileDto;
};

const PersonalInfoForm: React.FC<Props> = ({ personalInfo }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootNavigationProps>();
  const isPhoneVerified = personalInfo.phoneVerified;
  const isEmailVerified = personalInfo.emailVerified;
  const dataStatusPersonalInfo = useAppSelector(selectDataStatusPersonalInfo);
  const dataStatusAuth = useAppSelector(selectAuthDataStatus);
  const isLoading = [dataStatusPersonalInfo, dataStatusAuth].includes(
    DataStatus.PENDING,
  );
  const parsedPersonalInfo = personalInfoParser(personalInfo);
  const isVerifyPhoneFieldVisible =
    !isPhoneVerified && parsedPersonalInfo?.phone;
  const DEFAULT_VALUES = {
    firstName: parsedPersonalInfo.firstName,
    lastName: parsedPersonalInfo.lastName,
    email: parsedPersonalInfo.email,
    phone: parsedPersonalInfo.phone?.slice(4) || '',
    country: parsedPersonalInfo.country,
    region: parsedPersonalInfo.region,
    city: parsedPersonalInfo.city,
    zip: parsedPersonalInfo.zip,
    deliveryData: parsedPersonalInfo.deliveryData,
    instagram: parsedPersonalInfo.instagram,
    linkedin: parsedPersonalInfo.linkedin,
    facebook: parsedPersonalInfo.facebook,
    password: parsedPersonalInfo.password,
    newPassword: parsedPersonalInfo.newPassword,
    repeatPassword: parsedPersonalInfo.repeatPassword,
  };
  const { control, errors, handleSubmit, reset } =
    useAppForm<SaveUserProfileDto>({
      defaultValues: DEFAULT_VALUES,
      validationSchema: getPersonalInfoSchema(t),
    });

  const { isDirty } = useFormState({ control });

  useEffect(() => {
    reset({ ...DEFAULT_VALUES });
  }, [personalInfo]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      notification.error(t('errors.CORRECTLY_FILLED'));
    }
  }, [errors]);

  const onSubmit = (payload: SaveUserProfileDto): void => {
    dispatch(
      personalInfoActions.updatePersonalInfo(
        updatePersonalInfoParser(payload, personalInfo.socialMedia),
      ),
    )
      .unwrap()
      .then(() => {
        dispatch(authActions.getCurrentUser());
        notification.success(t('personal_info.CHANGES_SAVED'));
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      });
  };

  const handleCancelPress = (): void => {
    reset({ ...DEFAULT_VALUES });
    notification.success(t('personal_info.CHANGES_CANCELED'));
  };

  const handleVerifyPhonePress = () => {
    navigation.navigate(RootScreenName.VERIFY_PHONE);
  };

  const handleVerifyEmailPress = () => {
    navigation.navigate(RootScreenName.VERIFY_EMAIL);
  };

  return (
    <View>
      <Title label={t('personal_info.PERSONAL_INFO')} />
      <Input
        label={t('verification.NAME')}
        placeholder={t('verification.NAME_HINT')}
        name="firstName"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('verification.LAST_NAME')}
        placeholder={t('verification.LAST_NAME_HINT')}
        name="lastName"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('verification.EMAIL')}
        placeholder={t('verification.EMAIL_HINT')}
        name="email"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      {!isEmailVerified && (
        <VerifyField
          title={t('verify.VERIFY_EMAIL')}
          onPress={handleVerifyEmailPress}
        />
      )}
      <Input
        label={t('verification.PHONE_NUMBER')}
        immutableValue="+380"
        name="phone"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        inputStyle={{ paddingLeft: 46 }}
      />
      {isVerifyPhoneFieldVisible && (
        <VerifyField
          title={t('verify.VERIFY_PHONE')}
          onPress={handleVerifyPhonePress}
        />
      )}
      <Title label={t('personal_info.ADDRESS')} />
      <Input
        label={t('personal_info.COUNTRY')}
        placeholder={t('personal_info.COUNTRY_HINT')}
        name="country"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('personal_info.REGION')}
        placeholder={t('personal_info.REGION_HINT')}
        name="region"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
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
        label={t('personal_info.ZIP_CODE')}
        placeholder={t('personal_info.ZIP_CODE_HINT')}
        name="zip"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('personal_info.DELIVERY_DATA')}
        placeholder={t('personal_info.DELIVERY_DATA_HINT')}
        name="deliveryData"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Title label={t('personal_info.SOCIAL_NETWORKS')} />
      <Input
        label="Instagram"
        placeholder={t('personal_info.INSTAGRAM_HINT')}
        name="instagram"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label="Facebook"
        placeholder={t('personal_info.FACEBOOK_HINT')}
        name="facebook"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label="Linkedin"
        placeholder={t('personal_info.LINKEDIN_HINT')}
        name="linkedin"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Title label={t('verification.PASSWORD')} />
      <Input
        label={t('verification.PASSWORD_CURRENT')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        isSecure={true}
      />
      <Input
        label={t('verification.PASSWORD_NEW')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="newPassword"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        isSecure={true}
      />
      <Input
        label={t('verification.PASSWORD_REPEAT')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="repeatPassword"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        isSecure={true}
      />
      <View style={[globalStyles.mt5, globalStyles.mb3]}>
        <PrimaryButton
          label={t('common:components.BUTTON_SAVE')}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading || !isDirty}
        />
      </View>
      <View style={[globalStyles.mt3, globalStyles.mb5]}>
        <PrimaryButton
          label={t('common:components.BUTTON_CANCEL')}
          appearance={ButtonAppearance.TRANSPARENT}
          onPress={handleCancelPress}
          disabled={isLoading}
        />
      </View>
    </View>
  );
};

export { PersonalInfoForm };
