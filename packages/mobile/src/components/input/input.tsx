import React, { ReactElement } from 'react';
import { TextInput } from 'react-native';
import {
  FormControl,
  FormControlPath,
  FormControlErrors,
  FormControlValues,
} from '~/common/types/types';
import { Text, View } from '~/components/components';
import { useFormControl } from '~/hooks/hooks';
import { styles } from './styles';

type Props<T extends FormControlValues> = {
  label: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  errors: FormControlErrors<T>;
  placeholder?: string;
};

const Input = <T extends FormControlValues>({
  label,
  name,
  control,
  errors,
  placeholder,
}: Props<T>): ReactElement => {
  const { field } = useFormControl({ name, control });

  const error = errors[name]?.message as string;

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={field.value}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        style={styles.input}
      />
      {Boolean(error) && <Text>{error}</Text>}
    </View>
  );
};

export { Input };
