import React from 'react';
import { Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useTranslation, useCustomTheme } from '~/hooks/hooks';

const ResetPasswordHeader = () => {
  const { t } = useTranslation();
  const { colors } = useCustomTheme();

  return (
    <Text
      style={[
        globalStyles.fs14,
        globalStyles.mt1,
        { color: colors.subtitle },
        globalStyles.fontWeightMedium,
      ]}
    >
      {t('verification.ENTER_EMAIL')}
    </Text>
  );
};

export { ResetPasswordHeader };
