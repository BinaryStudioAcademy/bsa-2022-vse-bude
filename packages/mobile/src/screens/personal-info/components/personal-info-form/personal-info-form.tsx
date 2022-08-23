import React from 'react';
import { useAppForm, useCustomTheme, useTranslation } from '~/hooks/hooks';
import { View, Button, Input, DropDown } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ButtonAppearance } from '~/common/enums/enums';
import {
  CITIES,
  COUNTRIES,
  REGIONS,
  TEST_USER,
} from '~/mock/mock-personal-info';
import { Title } from '../components';

type UserPersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  region: string;
  city: string;
  zipCode: string;
  novaPoshta: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  password: string;
};

type Props = {
  onSubmit: () => void;
};

const PersonalInfoForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { dark, colors } = useCustomTheme();
  const { control, errors, handleSubmit } = useAppForm<UserPersonalInfo>({
    defaultValues: {
      firstName: TEST_USER.firstName,
      lastName: TEST_USER.lastName,
      email: TEST_USER.email,
      phone: TEST_USER.phone,
      country: TEST_USER.country,
      region: TEST_USER.region,
      city: TEST_USER.city,
      zipCode: TEST_USER.zipCode,
      novaPoshta: TEST_USER.novaPoshta,
      instagram: TEST_USER.instagram,
      linkedin: TEST_USER.linkedin,
      facebook: TEST_USER.facebook,
      password: TEST_USER.password,
    },
    //TODO need add validationSchema: personalInfo,
  });

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
        name="zipCode"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('personal_info.NOVA_POSHTA')}
        placeholder={t('personal_info.NOVA_POSHTA_HINT')}
        name="novaPoshta"
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
      />
      <Input
        label={t('verification.PASSWORD_NEW')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('verification.PASSWORD_REPEAT')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <View style={[globalStyles.mt5, globalStyles.mb3]}>
        <Button
          label={t('common:components.BUTTON_SAVE')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={[globalStyles.mt3, globalStyles.mb5]}>
        <Button
          label={t('common:components.BUTTON_CANCEL')}
          view={ButtonAppearance.TRANSPARENT}
          textColor={dark ? colors.whiteColor : colors.buttonTextSecondary}
          onPress={handleCancelPress}
        />
      </View>
    </View>
  );
};

export { PersonalInfoForm };
