import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import { Input } from '../../primitives/input';
import { inputWrapper } from '../layout/styles';
import { verifyEntity, verifyForm, verifyInput, verifyText } from '../styles';

export const EmailVerification = () => {
  const { t } = useTranslation('auth');

  return (
    <form css={verifyForm}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            {t('EMAIL_VERIFICATION_TEXT_FIRST_PART')}
            <span css={verifyEntity}> tesXXXXXXXXn.com</span>!
          </span>
          <span>{t('ENTER_VERIFICATION_CODE_BELOW')}!</span>
        </div>
        <Input
          css={verifyInput}
          label={t('VERIFICATION_CODE')}
          variant="primary"
          type="text"
          name="emailCode"
        />
      </div>
      <Button type="submit" width={'100%'}>
        {t('VERIFY_TEXT')}
      </Button>
    </form>
  );
};
