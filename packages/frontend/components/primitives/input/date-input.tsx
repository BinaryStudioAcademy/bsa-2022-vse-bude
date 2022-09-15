import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import DatePicker from 'react-datepicker';
import { IconColor, IconName } from '@enums';
import { Icon } from '../icon';
import type { InputDateProps } from './types';
import * as styles from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export const SECONDS_IN_ONE_DAY = 86400000; // +1 day

const InputDate = ({
  value,
  setValue,
  variant,
  error,
  id,
  label,
  ...props
}: InputDateProps) => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const days = t('days', { returnObjects: true });
  const months = t('months', { returnObjects: true });

  const customLocale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => 'mm/dd/yyyy',
    },
  };

  return (
    <div css={styles.inputWrapper}>
      {label && (
        <label data-variant={variant} css={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div css={styles.inputValueWrapper}>
        <DatePicker
          onFocus={(e) => e.target.blur()}
          onChange={setValue}
          selected={value}
          css={styles.input}
          placeholderText="-/-/-"
          id={id}
          locale={customLocale}
          minDate={Date.now() + SECONDS_IN_ONE_DAY}
          calendarStartDay={locale === 'ua' ? 1 : 0}
          {...props}
        />
        <div css={styles.iconWrapper}>
          <Icon icon={IconName.CALENDAR} color={IconColor.GRAY} />
        </div>
      </div>
      {error && <p css={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export { InputDate };
