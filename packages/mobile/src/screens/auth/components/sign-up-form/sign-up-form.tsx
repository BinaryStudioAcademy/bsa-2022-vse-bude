import React from 'react';
import { UserSignUpDto } from '@vse-bude/shared';
import { View, Input, PrimaryButton } from '~/components/components';
import { useAppForm, useTranslation, useAppSelector } from '~/hooks/hooks';
import { signUp } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
import { selectAuthDataStatus } from '~/store/selectors';
import { DataStatus } from '~/common/enums/enums';
import { DEFAULT_SIGN_UP_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: UserSignUpDto) => void;
};

const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const dataStatusAuth = useAppSelector(selectAuthDataStatus);
  const isLoading = dataStatusAuth === DataStatus.PENDING;
  const { control, errors, handleSubmit } = useAppForm<UserSignUpDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: signUp,
  });

  return (
    <View style={globalStyles.py5}>
      <Input
        label={t('verification.NAME')}
        placeholder={t('verification.NAME_HINT')}
        name="firstName"
        control={control}
        errors={errors}
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
        immutableValue="+380"
        name="phone"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        inputStyle={{ paddingLeft: 46 }}
      />
      <Input
        label={t('verification.PASSWORD')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
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
      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('verification.CREATE_ACCOUNT')}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      </View>
    </View>
  );
};

export { SignUpForm };
