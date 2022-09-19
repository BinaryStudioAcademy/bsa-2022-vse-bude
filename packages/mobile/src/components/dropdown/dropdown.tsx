import React, { ReactElement } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  FormControl,
  FormControlPath,
  FormControlValues,
} from '~/common/types/types';
import { useState, useCustomTheme, useFormControl } from '~/hooks/hooks';
import { Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { ColorValue } from 'react-native';
import { styles } from './styles';

type Props<T extends FormControlValues> = {
  label?: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  items: Array<{
    label: string;
    value: string;
  }>;
  zIndex: number;
  disabled?: boolean;
  placeholder?: string;
  backgroundColor?: ColorValue;
  dropDownDirection?: 'DEFAULT' | 'TOP' | 'BOTTOM' | 'AUTO';
  onChange?: (value: string) => void;
};

const DropDown = <T extends FormControlValues>({
  label,
  name,
  control,
  items,
  zIndex,
  disabled,
  placeholder,
  backgroundColor,
  dropDownDirection,
  onChange,
}: Props<T>): ReactElement => {
  const { field } = useFormControl({ name, control });
  const { colors } = useCustomTheme();
  const [open, setOpen] = useState(false);

  const handleChange = (value: string | null) => {
    if (value && onChange) {
      onChange(value);
    }
  };

  return (
    <View style={styles.container}>
      {!!label && (
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
      )}
      <DropDownPicker
        listMode="SCROLLVIEW"
        open={open}
        value={field.value}
        items={items}
        setOpen={setOpen}
        setValue={field.onChange}
        textStyle={[
          disabled ? { color: colors.placeholder } : { color: colors.text },
          globalStyles.fs14,
        ]}
        placeholderStyle={[{ color: colors.placeholder }, globalStyles.fs14]}
        style={[
          styles.dropDown,
          { backgroundColor: backgroundColor || colors.backgroundElements },
        ]}
        dropDownContainerStyle={[
          { backgroundColor: backgroundColor || colors.backgroundElements },
        ]}
        dropDownDirection={dropDownDirection || 'AUTO'}
        zIndex={zIndex}
        disabled={disabled}
        placeholder={placeholder}
        onChangeValue={handleChange}
      />
    </View>
  );
};

export { DropDown };
