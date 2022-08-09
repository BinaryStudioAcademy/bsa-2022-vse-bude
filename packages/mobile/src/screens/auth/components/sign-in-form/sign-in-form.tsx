import React, { FC } from 'react';
import { Button, Text, View } from '~/components/components';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: () => void;
};

const SignInForm: FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text>{t('verification.SING_IN')}</Text>
      <View>
        <Button
          label={t('verification.SING_IN')}
          onPress={() => {
            // TODO: handle press
          }}
        />
      </View>
    </>
  );
};

export { SignInForm };
