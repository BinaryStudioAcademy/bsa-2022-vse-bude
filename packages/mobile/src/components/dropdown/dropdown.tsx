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
import { styles } from './styles';

type Props<T extends FormControlValues> = {
  label: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  items: Array<{
    label: string;
    value: string;
  }>;
  zIndex: number;
};

const DropDown = <T extends FormControlValues>({
  label,
  name,
  control,
  items,
  zIndex,
}: Props<T>): ReactElement => {
  const { field } = useFormControl({ name, control });
  const { colors } = useCustomTheme();
  const [open, setOpen] = useState(false);

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
      <DropDownPicker
        listMode="SCROLLVIEW"
        open={open}
        value={field.value}
        items={items}
        setOpen={setOpen}
        setValue={field.onChange}
        textStyle={[{ color: colors.placeholder }, globalStyles.fs14]}
        style={[
          styles.dropDown,
          { backgroundColor: colors.backgroundElements },
        ]}
        zIndex={zIndex}
      />
    </View>
  );
};

export { DropDown };
