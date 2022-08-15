import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import { Input } from '../../primitives/input';
import { inputWrapper } from '../layout/styles';
import {
  verifyEntity,
  verifyForm,
  verifyInput,
  verifyText,
} from '../../../pages/auth/styles';

export const PhoneVerification = () => {
  const { t } = useTranslation('auth');

  return (
    <form css={verifyForm}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            {t('PHONE_VERIFICATION_TEXT_FIRST_PART')}
            <span css={verifyEntity}> +3809XXXXXXX9</span>!
          </span>
          <span>{t('ENTER_VERIFICATION_CODE_BELOW')}!</span>
        </div>
        <Input
          css={verifyInput}
          label={t('VERIFICATION_CODE')}
          variant="primary"
          type="text"
          name="phoneCode"
        />
      </div>
      <Button type="submit" width={'100%'}>
        {t('VERIFY_TEXT')}
      </Button>
    </form>
  );
};
