import dayjs from 'dayjs';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import React, { ReactElement } from 'react';

import {
  FormControl,
  FormControlErrors,
  FormControlPath,
  FormControlValues,
} from '~/common/types/types';

import { useFormControl, useState } from '~/hooks/hooks';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { StyleProp, ViewStyle } from 'react-native';
import {
  CalendarIcon,
  ClockIcon,
  DateTimePicker,
  Text,
  TouchableOpacity,
  View,
} from '../components';
import { useStyles } from './styles';

type Props<T extends FormControlValues> = {
  placeholder: string;
  label: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  errors: FormControlErrors<T>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  mode: 'date' | 'time';
};

const DatePicker = <T extends FormControlValues>({
  placeholder,
  name,
  control,
  mode,
  label,
  contentContainerStyle,
}: Props<T>): ReactElement => {
  const [open, setOpen] = useState(false);
  const { field } = useFormControl({ name, control });
  const styles = useStyles();
  const { value, onChange } = field;

  const today = dayjs();
  const tomorrow = today.add(1, 'day');
  const date = value ? dayjs(value).format('DD/MM/YYYY') : null;
  const time = value ? dayjs(value).format('HH:mm') : null;
  const textValue = mode === 'date' ? date : time;

  const handleOnChange = (
    _event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ): void => {
    setOpen(false);
    onChange(selectedDate);
  };

  return (
    <View style={contentContainerStyle}>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}
      >
        <Text style={[styles.label, globalStyles.mb2, globalStyles.fs12]}>
          {label}
        </Text>
        {textValue ? (
          <Text style={[styles.input, globalStyles.fs14]}>{textValue}</Text>
        ) : (
          <Text style={[styles.placeholder, globalStyles.fs14]}>
            {placeholder}
          </Text>
        )}
        {mode === 'date' && (
          <CalendarIcon
            size={22}
            color={ColorPalette.GRAY_300}
            style={styles.inputIcon}
          />
        )}
        {mode === 'time' && (
          <ClockIcon
            size={22}
            color={ColorPalette.GRAY_300}
            style={styles.inputIcon}
          />
        )}
      </TouchableOpacity>
      {open && (
        <DateTimePicker
          value={value ? new Date(value) : tomorrow.toDate()}
          mode={mode}
          onChange={handleOnChange}
          minimumDate={tomorrow.toDate()}
        />
      )}
    </View>
  );
};

export { DatePicker };