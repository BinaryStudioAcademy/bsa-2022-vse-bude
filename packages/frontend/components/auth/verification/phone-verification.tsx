import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import { Input } from '../../primitives/input';
import { inputWrapper } from '../layout/styles';
import { verifyEntity, verifyForm, verifyInput, verifyText } from '../styles';

export const PhoneVerification = () => {
  const { t } = useTranslation('auth');

  return (
    <form css={verifyForm}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            {t('phoneText')}
            <span css={verifyEntity}> +3809XXXXXXX9</span>!
          </span>
          <span>{t('enterCode')}!</span>
        </div>
        <Input
          css={verifyInput}
          label={t('code')}
          variant="primary"
          type="text"
          name="phoneCode"
        />
      </div>
      <Button type="submit" width={'100%'}>
        {t('text')}
      </Button>
    </form>
  );
};
