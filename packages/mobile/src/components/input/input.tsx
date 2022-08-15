import React, { ReactElement } from 'react';
import { TextInput } from 'react-native';
import {
  FormControl,
  FormControlPath,
  FormControlErrors,
  FormControlValues,
} from '~/common/types/types';
import { Text, View, AlertIcon } from '~/components/components';
import { useCustomTheme, useFormControl } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
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
  ...props
}: Props<T>): ReactElement => {
  const { field } = useFormControl({ name, control });
  const { colors } = useCustomTheme();

  const error = errors[name]?.message as string;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          globalStyles.mb2,
          globalStyles.fs12,
          { color: colors.titlePrimary },
        ]}
      >
        {label}
      </Text>
      <TextInput
        value={field.value}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        style={[
          styles.input,
          {
            backgroundColor: colors.backgroundElements,
            color: colors.placeholder,
            borderColor: error ? colors.error : colors.backgroundElements,
          },
          globalStyles.fs14,
        ]}
        {...props}
      />
      {Boolean(error) && (
        <View
          style={[
            globalStyles.mt2,
            globalStyles.fs12,
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
          ]}
        >
          <AlertIcon style={[globalStyles.mr2, { color: colors.error }]} />
          <Text
            style={[styles.label, globalStyles.fs12, { color: colors.error }]}
          >
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

export { Input };
