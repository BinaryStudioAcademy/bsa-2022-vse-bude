import React from 'react';
import { useAppForm, useTranslation } from '~/hooks/hooks';
import { View, Button, Input, DropDown } from '~/components/components';
// import { personalInfo } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
import { ButtonAppearance } from '~/common/enums/enums';
import { Title } from '../components';
import { CITIES, COUNTRIES, REGIONS, TEST_USER } from './moke-data';

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
    // validationSchema: personalInfo,
  });

  const onCancel = (): void => {
    //TODO add Cancel handler
  };

  return (
    <View>
      <Title label="Personal Info" />
      <Input
        label="First Name"
        placeholder={t('verification.NAME_HINT')}
        name="firstName"
        control={control}
        errors={errors}
      />
      <Input
        label="Last Name"
        placeholder={t('verification.LAST_NAME_HINT')}
        name="lastName"
        control={control}
        errors={errors}
      />
      <Input
        label="Email"
        placeholder={t('verification.EMAIL_HINT')}
        name="email"
        control={control}
        errors={errors}
      />
      <Input
        label="Phone"
        placeholder="Enter your phone"
        name="phone"
        control={control}
        errors={errors}
      />
      <Title label="Address" />
      <DropDown
        label="Country"
        name="country"
        control={control}
        items={COUNTRIES}
        zIndex={15}
      />
      <DropDown
        label="Region"
        name="region"
        control={control}
        items={REGIONS}
        zIndex={10}
      />
      <DropDown
        label="City"
        name="city"
        control={control}
        items={CITIES}
        zIndex={5}
      />
      <Input
        label="ZIP Code"
        placeholder="Enter ZIP Code"
        name="zipCode"
        control={control}
        errors={errors}
      />
      <Input
        label="# Nova Poshta"
        placeholder="Enter Nova Poshta office"
        name="novaPoshta"
        control={control}
        errors={errors}
      />
      <Title label="Social networks" />
      <Input
        label="Instagram"
        placeholder="Enter you Instagram"
        name="instagram"
        control={control}
        errors={errors}
      />
      <Input
        label="Linkedin"
        placeholder="Enter you Linkedin"
        name="linkedin"
        control={control}
        errors={errors}
      />
      <Input
        label="Facebook"
        placeholder="Enter you Facebook"
        name="facebook"
        control={control}
        errors={errors}
      />
      <Title label="Password" />
      <Input
        label="Current Password"
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
      />
      <Input
        label="New Password"
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
      />
      <Input
        label="Repeat Password"
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
      />
      <View style={[globalStyles.mt5, globalStyles.mb3]}>
        <Button label="Save" onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={[globalStyles.mt3, globalStyles.mb5]}>
        <Button
          label="Cancel"
          view={ButtonAppearance.OUTLINED}
          onPress={() => onCancel()}
        />
      </View>
    </View>
  );
};

export { PersonalInfoForm };
