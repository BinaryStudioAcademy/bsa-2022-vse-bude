import React, { ReactElement } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  FormControl,
  FormControlErrors,
  FormControlPath,
  FormControlValues,
} from '~/common/types/types';
import { useState, useCustomTheme, useFormControl } from '~/hooks/hooks';
import { Text, View, AlertIcon } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props<T extends FormControlValues> = {
  label?: string;
  name: FormControlPath<T>;
  errors: FormControlErrors<T>;
  control: FormControl<T>;
  items: Array<{
    label: string;
    value: string;
  }>;
  zIndex: number;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
};

const DropDown = <T extends FormControlValues>({
  label,
  name,
  errors,
  control,
  items,
  zIndex,
  disabled,
  placeholder,
  required,
}: Props<T>): ReactElement => {
  const { field } = useFormControl({ name, control });
  const { colors } = useCustomTheme();
  const [open, setOpen] = useState(false);
  const [itemValue, setItemValue] = useState(field.value);
  const [innerItems, setInnerItems] = useState(items);
  const error = errors[name]?.message as string;

  return (
    <View style={styles.container}>
      {!!label && (
        <View style={globalStyles.flexDirectionRow}>
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
        </View>
      )}
      <DropDownPicker
        listMode="SCROLLVIEW"
        open={open}
        value={itemValue}
        items={innerItems}
        setOpen={setOpen}
        setItems={setInnerItems}
        setValue={setItemValue}
        onChangeValue={field.onChange}
        textStyle={[
          disabled ? { color: colors.placeholder } : { color: colors.text },
          globalStyles.fs14,
        ]}
        placeholderStyle={[{ color: colors.placeholder }, globalStyles.fs14]}
        style={[
          styles.dropDown,
          { backgroundColor: colors.backgroundElements },
        ]}
        zIndex={zIndex}
        disabled={disabled}
        placeholder={placeholder}
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

export { DropDown };
