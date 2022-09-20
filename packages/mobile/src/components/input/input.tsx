import React, { ReactElement } from 'react';
import { StyleProp, TextInput, ViewStyle, TextInputProps } from 'react-native';
import {
  FormControl,
  FormControlPath,
  FormControlErrors,
  FormControlValues,
} from '~/common/types/types';
import {
  Text,
  View,
  AlertIcon,
  EyeIcon,
  EyeOffIcon,
  Pressable,
  Popover,
  TouchableOpacity,
  InfoIcon,
} from '~/components/components';
import { useCustomTheme, useFormControl, useState } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props<T extends FormControlValues> = {
  label?: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  errors: FormControlErrors<T>;
  placeholder?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  isSecure?: boolean;
  editable?: boolean;
  textInputProps?: TextInputProps;
  required?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  popoverText?: string;
  immutableValue?: string;
};

const Input = <T extends FormControlValues>({
  label,
  name,
  control,
  errors,
  placeholder,
  contentContainerStyle,
  inputStyle,
  isSecure,
  editable,
  textInputProps,
  required = false,
  multiline = false,
  numberOfLines = 1,
  popoverText,
  immutableValue,
}: Props<T>): ReactElement => {
  const { field } = useFormControl({ name, control });
  const { colors } = useCustomTheme();
  const [secured, setSecured] = useState(isSecure);

  const error = errors[name]?.message as string;
  const onSecureChange = () => {
    setSecured((prevState) => !prevState);
  };

  return (
    <View style={contentContainerStyle}>
      {!!label && (
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.mb1,
            { height: 16 },
          ]}
        >
          <Text
            style={[
              styles.label,
              globalStyles.fs12,
              { color: colors.titlePrimary },
            ]}
          >
            {label}
          </Text>
          {required && (
            <Text
              style={[
                styles.required,
                globalStyles.ml1,
                globalStyles.fs22,
                {
                  color: colors.accent,
                },
              ]}
            >
              *
            </Text>
          )}
          {popoverText && (
            <Popover
              popoverStyle={styles.popover}
              from={
                <TouchableOpacity style={globalStyles.flexDirectionRow}>
                  <InfoIcon
                    size={13}
                    color={colors.accent}
                    style={styles.popoverIcon}
                  />
                </TouchableOpacity>
              }
            >
              <Text style={[globalStyles.fs12]}>{popoverText}</Text>
            </Popover>
          )}
        </View>
      )}
      <View>
        <TextInput
          value={field.value}
          placeholder={placeholder}
          autoCorrect={false}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={secured}
          selectTextOnFocus={isSecure}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={[
            styles.input,
            {
              color: colors.text,
              backgroundColor: colors.backgroundElements,
              borderColor: error ? colors.error : colors.backgroundElements,
            },
            globalStyles.fs14,
            inputStyle,
          ]}
          {...textInputProps}
        />
        {immutableValue && (
          <Text
            style={[
              styles.immutableValue,
              globalStyles.fs14,
              {
                color: colors.text,
                backgroundColor: colors.backgroundElements,
              },
            ]}
          >
            {immutableValue}
          </Text>
        )}
        {isSecure && (
          <Pressable style={styles.eyeIconWrapper} onPress={onSecureChange}>
            {secured ? <EyeOffIcon size={22} /> : <EyeIcon size={22} />}
          </Pressable>
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
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

export { Input };
