import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { resendCodeBlock, resendCodeBtn, resendCodeTxt } from './styles';
import type { ResendCodeButtonProps } from './types';

export const ResendCodeButton = ({
  onClickResend,
  timeLimit,
}: ResendCodeButtonProps) => {
  const { t } = useTranslation('auth');
  const { t: commonLang } = useTranslation('common');

  const [resendDisabled, setResendDisabled] = useState(false);
  const [timeToResend, setTimeToResend] = useState(timeLimit);

  useEffect(() => {
    if (resendDisabled) {
      const interval = setInterval(() => {
        setTimeToResend((prev) => prev - 1);
      }, 1000);

      if (timeToResend === 0) {
        setResendDisabled(false);
        setTimeToResend(timeLimit);
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [timeToResend, resendDisabled, timeLimit]);

  const onResendCode = () => {
    setResendDisabled(true);
    onClickResend();
  };

  return (
    <div css={resendCodeBlock}>
      {!resendDisabled && (
        <button css={resendCodeBtn} onClick={onResendCode}>
          {t('RESEND_CODE')}
        </button>
      )}
      {resendDisabled && (
        <span css={resendCodeTxt}>
          {t('RESEND_CODE_TIME_LEFT')}: {timeToResend}{' '}
          {commonLang('SECONDS_SHORT')}
        </span>
      )}
    </div>
  );
};
