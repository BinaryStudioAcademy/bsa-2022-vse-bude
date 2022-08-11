import React, { ReactElement } from 'react';
import { TextInput } from 'react-native';
import { Controller, RegisterOptions } from 'react-hook-form';
import {
  FormControl,
  FormControlPath,
  FormControlValues,
} from '~/common/types/types';
import { Text, View } from '~/components/components';
import { styles } from './styles';

type Props<T extends FormControlValues> = {
  label?: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  rules?: RegisterOptions;
  placeholder: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
};

const Input = <T extends FormControlValues>({
  control,
  name,
  rules = {},
  placeholder = '',
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  label,
  ...props
}: Props<T>): ReactElement => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Text style={styles.label}>{label}</Text>
          <View
            style={[
              styles.container,
              { borderColor: error ? '#E81414' : 'transparent' },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              multiline={multiline}
              numberOfLines={numberOfLines}
              style={styles.input}
              {...props}
            />
          </View>
          {error && (
            <Text style={{ color: '#E81414', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export { Input };
