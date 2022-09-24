import React, { FC } from 'react';
import {
  View,
  Input,
  PrimaryButton,
  ButtonText,
  Divider,
  Text,
} from '~/components/components';
import { UserSignInDto } from '@vse-bude/shared';
import {
  useAppForm,
  useTranslation,
  useNavigation,
  useAppSelector,
} from '~/hooks/hooks';
import { getSignInSchema } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
import { DataStatus, RootScreenName } from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import { selectAuthDataStatus } from '~/store/selectors';
import { DEFAULT_SIGN_IN_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: UserSignInDto) => void;
};

const SignInForm: FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const dataStatusAuth = useAppSelector(selectAuthDataStatus);
  const isLoading = dataStatusAuth === DataStatus.PENDING;
  const { control, errors, handleSubmit } = useAppForm<UserSignInDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: getSignInSchema(t),
  });
  const { navigate } = useNavigation<RootNavigationProps>();

  const navigateResetPassword = () => {
    navigate(RootScreenName.FORGOT_PASSWORD);
  };

  return (
    <View style={globalStyles.py5}>
      <Input
        label={t('verification.EMAIL')}
        placeholder={t('verification.EMAIL_HINT')}
        name="email"
        control={control}
        errors={errors}
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
      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('verification.SIGN_IN')}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      </View>
      <Divider contentContainerStyle={{ marginVertical: 20 }} />
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifyContentCenter,
        ]}
      >
        <Text>{t('verification.FORGOT_PASSWORD')}?</Text>
        <ButtonText
          onPress={navigateResetPassword}
          contentContainerStyle={{ alignSelf: 'flex-end', marginLeft: 10 }}
          textStyle={globalStyles.fs16}
        >
          {t('verification.FORGOT_PASSWORD_BUTTON')}
        </ButtonText>
      </View>
    </View>
  );
};

export { SignInForm };
