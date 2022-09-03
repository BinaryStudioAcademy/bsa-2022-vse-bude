import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { DEFAULT_INTERVAL } from '../../../../common/constants/app';
import { LinkButton } from '../../../primitives/link-button';
import { resendCodeBlock, resendCodeTxt } from './styles';
import type { ResendCodeButtonProps } from './types';

export const ResendCodeButton = ({
  onClickResend,
  timeLimit,
}: ResendCodeButtonProps) => {
  const { t } = useTranslation('common');

  const [resendDisabled, setResendDisabled] = useState(false);
  const [timeToResend, setTimeToResend] = useState(timeLimit);

  useEffect(() => {
    if (resendDisabled) {
      const interval = setInterval(() => {
        setTimeToResend((prev) => prev - 1);
      }, DEFAULT_INTERVAL);

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
        <LinkButton size={'small'} onClickHook={onResendCode}>
          {t('verify.enterCode.resend')}
        </LinkButton>
      )}
      {resendDisabled && (
        <span css={resendCodeTxt}>
          {t('resendBtn.codeTimeLeft')}: {timeToResend} {t('resendBtn.seconds')}
        </span>
      )}
    </div>
  );
};
