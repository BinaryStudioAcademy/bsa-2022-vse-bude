import React, { FC } from 'react';
import { useAppForm, useTranslation, useState } from '~/hooks/hooks';
import { resetPassword } from '~/validation-schemas/validation-schemas';
import { ResetPasswordLink, ColorPalette } from '@vse-bude/shared';
import {
  View,
  PrimaryButton,
  Input,
  Text,
  CheckBox,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { DEFAULT_RESET_PASSWORD_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: ResetPasswordLink) => void;
};
const ResetPassword: FC<Props> = ({ onSubmit }) => {
  const [hiddenEmail, setHiddenEmail] = useState(false);
  const { t } = useTranslation();
  const { control, errors, handleSubmit } = useAppForm<ResetPasswordLink>({
    defaultValues: DEFAULT_RESET_PASSWORD_PAYLOAD,
    validationSchema: resetPassword,
  });

  return (
    <View style={globalStyles.py5}>
      <Input
        label={t('verification.EMAIL')}
        placeholder={t('verification.EMAIL_HINT')}
        name="email"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        textInputProps={{ secureTextEntry: hiddenEmail }}
      />
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.alignItemsCenter,
          globalStyles.mt5,
        ]}
      >
        <CheckBox
          tintColors={{
            true: ColorPalette.YELLOW_100,
            false: ColorPalette.YELLOW_100,
          }}
          value={hiddenEmail}
          onValueChange={setHiddenEmail}
        />
        <Text style={globalStyles.fs14}>{t('verification.HIDE_EMAIL')}</Text>
      </View>

      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('verification.RESET_PASSWORD')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export { ResetPassword };
