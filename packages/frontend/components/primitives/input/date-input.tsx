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
  variant = 'primary',
  error,
  id,
  label,
  showTimeInput,
  labelRequiredMark,
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
          {labelRequiredMark && <span>*</span>}
        </label>
      )}
      <div css={[styles.inputValueWrapper, styles.datePickerWrapper]}>
        <DatePicker
          onFocus={(e) => e.target.blur()}
          selected={new Date(value)}
          css={styles.input}
          placeholderText={showTimeInput ? 'mm/dd/yyyy hh:mm' : 'mm/dd/yyyy'}
          id={id}
          showTimeInput={showTimeInput}
          locale={customLocale as any}
          minDate={new Date(new Date().getTime() + SECONDS_IN_ONE_DAY)}
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
