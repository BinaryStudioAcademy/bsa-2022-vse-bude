import React, { ReactElement } from 'react';
import { TextInput, ViewStyle } from 'react-native';
import {
  FormControl,
  FormControlPath,
  FormControlErrors,
  FormControlValues,
} from '~/common/types/types';
import { Text, View, AlertIcon, EyeIcon } from '~/components/components';
import { useCustomTheme, useFormControl, useState } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props<T extends FormControlValues> = {
  label: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  errors: FormControlErrors<T>;
  placeholder?: string;
  contentContainerStyle?: ViewStyle;
  secureField?: boolean;
  hint?: string | boolean;
};

const Input = <T extends FormControlValues>({
  label,
  name,
  control,
  errors,
  placeholder,
  contentContainerStyle,
  secureField = false,
  hint,
  ...props
}: Props<T>): ReactElement => {
  const [secured, setSecured] = useState(secureField ? true : false);
  const { field } = useFormControl({ name, control });
  const { colors } = useCustomTheme();

  const error = errors[name]?.message as string;
  const onSecureChange = () => {
    setSecured((prevState) => !prevState);
  };

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
      <View>
        <TextInput
          value={field.value}
          placeholder={placeholder}
          autoCorrect={false}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={secured}
          selectTextOnFocus={field.name === 'password' ? false : true}
          style={[
            styles.input,
            {
              color: colors.placeholder,
              backgroundColor: colors.backgroundElements,
              borderColor: error ? colors.error : colors.backgroundElements,
            },
            globalStyles.fs14,
          ]}
          {...props}
        />
        {secureField && (
          <EyeIcon size={20} style={styles.icon} onPress={onSecureChange} />
        )}
      </View>
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
            {error || (hint as string)}
          </Text>
        </View>
      )}
      {Boolean(error) || (
        <Text style={[styles.label, globalStyles.fs12]}>{hint as string}</Text>
      )}
    </View>
  );
};

export { Input };
