import React from 'react';
import { Divider } from '~/components/components';
import { useTranslation } from '~/hooks/hooks';
import { GoogleButton } from '../components';

const SignInUpHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <GoogleButton />
      <Divider text={t('common:text.OR')} />
    </>
  );
};

export { SignInUpHeader };
