import React from 'react';
import { UserSignUpDto } from '@vse-bude/shared';
import { View, Button, Input } from '~/components/components';
import { useAppForm, useTranslation } from '~/hooks/hooks';
import { signUp } from '~/validation-schemas/validation-schemas';
import { DEFAULT_SIGN_UP_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: UserSignUpDto) => void;
};

const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { control, errors, handleSubmit } = useAppForm<UserSignUpDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: signUp,
  });

  return (
    <View>
      <Input
        label={t('verification.EMAIL')}
        placeholder={t('verification.EMAIL_HINT')}
        name="email"
        control={control}
        errors={errors}
      />
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
      />
      <Input
        label="Phone Number"
        placeholder="Enter your phone"
        name="phone"
        control={control}
        errors={errors}
      />
      <Input
        label={t('verification.PASSWORD')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
      />
      <Input
        label="Repeat Password"
        placeholder="Enter password"
        name="password"
        control={control}
        errors={errors}
      />
      <View style={{ marginVertical: 15 }}>
        <Button
          label={t('verification.SING_UP')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export { SignUpForm };
