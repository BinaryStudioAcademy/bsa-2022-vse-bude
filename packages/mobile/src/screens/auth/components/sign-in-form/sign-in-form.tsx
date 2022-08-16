import React, { FC } from 'react';
import { Button, View, Input } from '~/components/components';
import { UserSignInDto } from '@vse-bude/shared';
import { useAppForm, useTranslation } from '~/hooks/hooks';
import { signIn } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
import { DEFAULT_SIGN_IN_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: UserSignInDto) => void;
};

const SignInForm: FC<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignInDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: signIn,
  });
  const { t } = useTranslation();

  return (
    <View>
      <Input
        label={t('verification.EMAIL')}
        placeholder={t('verification.EMAIL_HINT')}
        name="email"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <Input
        label={t('verification.PASSWORD')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
      />
      <View style={{ marginTop: 30 }}>
        <Button
          label={t('verification.SING_IN')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export { SignInForm };
