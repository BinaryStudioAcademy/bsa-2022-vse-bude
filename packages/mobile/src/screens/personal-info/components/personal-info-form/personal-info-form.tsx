import React from 'react';
import { useAppDispatch, useAppForm, useTranslation } from '~/hooks/hooks';
import { View, Input, DropDown, PrimaryButton } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ButtonAppearance } from '~/common/enums/enums';
import { personalInfo as personalInfoActions } from '~/store/actions';
import { CITIES, COUNTRIES, REGIONS } from '~/mock/mock-personal-info';
import { SaveUserProfileDto } from '@vse-bude/shared';
import { Title } from '../components';

type Props = {
  personalInfo: SaveUserProfileDto;
};

const PersonalInfoForm: React.FC<Props> = ({ personalInfo }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { control, errors, handleSubmit } = useAppForm<SaveUserProfileDto>({
    defaultValues: {
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      email: personalInfo.email,
      phone: personalInfo.phone,
      country: personalInfo.country,
      region: personalInfo.region,
      city: personalInfo.city,
      zip: personalInfo.zip,
      deliveryData: personalInfo.deliveryData,
      instagram: personalInfo.instagram,
      linkedin: personalInfo.linkedin,
      facebook: personalInfo.facebook,
      password: personalInfo.password,
      newPassword: personalInfo.newPassword,
      repeatPassword: personalInfo.repeatPassword,
    },
    //TODO need add validationSchema: personalInfo,
  });

  const onSubmit = (payload: SaveUserProfileDto): void => {
    dispatch(personalInfoActions.updatePersonalInfo(payload));
  };

  const handleCancelPress = (): void => {
    //TODO add Cancel handler
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
      <Input
        label={t('verification.PHONE_NUMBER')}
        placeholder={t('verification.PHONE_NUMBER_HINT')}
        name="phone"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Title label={t('personal_info.ADDRESS')} />
      <DropDown
        label={t('personal_info.COUNTRY')}
        name="country"
        control={control}
        items={COUNTRIES}
        zIndex={15}
      />
      <DropDown
        label={t('personal_info.REGION')}
        name="region"
        control={control}
        items={REGIONS}
        zIndex={10}
      />
      <DropDown
        label={t('personal_info.CITY')}
        name="city"
        control={control}
        items={CITIES}
        zIndex={5}
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
        label={t('personal_info.NOVA_POSHTA')}
        placeholder={t('personal_info.NOVA_POSHTA_HINT')}
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
        label="Linkedin"
        placeholder={t('personal_info.LINKEDIN_HINT')}
        name="linkedin"
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
        />
      </View>
      <View style={[globalStyles.mt3, globalStyles.mb5]}>
        <PrimaryButton
          label={t('common:components.BUTTON_CANCEL')}
          appearance={ButtonAppearance.TRANSPARENT}
          onPress={handleCancelPress}
        />
      </View>
    </View>
  );
};

export { PersonalInfoForm };
