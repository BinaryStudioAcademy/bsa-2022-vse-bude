import React from 'react';
import { Text } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useTranslation } from '~/hooks/hooks';

const ForgotPasswordHeader = () => {
  const { t } = useTranslation();

  return (
    <Text style={[globalStyles.fs14, globalStyles.mt1]}>
      {t('verification.ENTER_EMAIL')}
    </Text>
  );
};

export { ForgotPasswordHeader };
