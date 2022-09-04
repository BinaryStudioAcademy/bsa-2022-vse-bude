import type { SaveUserProfileDto } from '@vse-bude/shared';
import { UserPersonalInfoValidationMessage } from '@vse-bude/shared';
import type { TFunction } from 'next-i18next';
import type { UseFormSetError, UseFormSetValue } from 'react-hook-form';

export const onChangeNewPassword = ({
  value,
  setError,
  setValue,
  t,
}: {
  value: string;
  t: TFunction;
  setError: UseFormSetError<SaveUserProfileDto>;
  setValue: UseFormSetValue<SaveUserProfileDto>;
}) => {
  if (value.includes(' ')) {
    setError('newPassword', {
      message: t(UserPersonalInfoValidationMessage.SPACES_IN_PASSWORD),
    });
  } else if (/^[А-ЯЁIЇҐЄЂЃЀЅЍЈЉЊЋЌЎа-яёіїґєђѓѐѕѝјљњћќў]+$/.test(value)) {
    setError('newPassword', {
      message: t(UserPersonalInfoValidationMessage.CYRILLIC),
    });
  } else {
    setValue('newPassword', value);
  }
};
