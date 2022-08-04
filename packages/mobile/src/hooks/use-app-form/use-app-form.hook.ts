import { useForm, UseFormHandleSubmit, DeepPartial } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import {
  FormControl,
  FormControlErrors,
  FormControlValues,
  ValidationSchema,
} from '~/common/types/types';

type UseAppFormParams<T extends FormControlValues = FormControlValues> = {
  defaultValues: DeepPartial<T>;
  validationSchema?: ValidationSchema;
};

type UseAppFormResult<T extends FormControlValues = FormControlValues> = {
  control: FormControl<T>;
  errors: FormControlErrors<T>;
  handleSubmit: UseFormHandleSubmit<T>;
};

const useAppForm = <T extends FormControlValues = FormControlValues>({
  validationSchema,
  defaultValues,
}: UseAppFormParams<T>): UseAppFormResult<T> => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    defaultValues,
    resolver: validationSchema ? joiResolver(validationSchema) : undefined,
  });

  return {
    control,
    errors,
    handleSubmit: handleSubmit as UseFormHandleSubmit<T>,
  };
};

export { useAppForm };
