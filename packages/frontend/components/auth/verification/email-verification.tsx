import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import { Input } from '../../primitives/input';
import { inputWrapper } from '../layout/styles';
import { verifyEntity, verifyForm, verifyInput, verifyText } from '../styles';

export const EmailVerification = () => {
  const { t } = useTranslation();

  return (
    <form css={verifyForm}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            {t('auth:emailText')}
            <span css={verifyEntity}> tesXXXXXXXXn.com</span>!
          </span>
          <span>{t('auth:enterCode')}!</span>
        </div>
        <Input
          css={verifyInput}
          label={t('auth:code')}
          variant="primary"
          type="text"
          name="emailCode"
        />
      </div>
      <Button type="submit" width={'100%'}>
        {t('auth:text')}
      </Button>
    </form>
  );
};
