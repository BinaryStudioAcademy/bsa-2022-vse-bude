import React, { ReactElement } from 'react';
import { TextInput, ViewStyle } from 'react-native';
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
  contentContainerStyle?: ViewStyle | ViewStyle[];
  isSecure?: boolean;
};

const Input = <T extends FormControlValues>({
  label,
  name,
  control,
  errors,
  placeholder,
  contentContainerStyle,
  isSecure,
  ...props
}: Props<T>): ReactElement => {
  const { field } = useFormControl({ name, control });
  const { colors } = useCustomTheme();

  const error = errors[name]?.message as string;

  return (
    <View style={contentContainerStyle}>
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
        placeholderTextColor={colors.placeholder}
        secureTextEntry={isSecure}
        style={[
          styles.input,
          {
            color: colors.text,
            backgroundColor: colors.backgroundElements,
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
