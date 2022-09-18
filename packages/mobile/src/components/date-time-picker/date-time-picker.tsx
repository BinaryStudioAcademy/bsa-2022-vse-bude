import dayjs from 'dayjs';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import React, { ReactElement } from 'react';

import {
  FormControl,
  FormControlErrors,
  FormControlPath,
  FormControlValues,
} from '~/common/types/types';

import { useFormControl, useState, useCustomTheme } from '~/hooks/hooks';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { StyleProp, ViewStyle } from 'react-native';
import { DateTimeFormat, DateTimeType } from '~/common/enums/ui/ui';
import {
  CalendarIcon,
  ClockIcon,
  DateTimePicker,
  Text,
  TouchableOpacity,
  View,
  AlertIcon,
} from '../components';
import { useStyles } from './styles';

type Props<T extends FormControlValues> = {
  placeholder: string;
  label: string;
  name: FormControlPath<T>;
  control: FormControl<T>;
  errors: FormControlErrors<T>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  mode: DateTimeType;
  requiredMark: boolean;
};

const DatePicker = <T extends FormControlValues>({
  placeholder,
  name,
  errors,
  control,
  mode,
  label,
  contentContainerStyle,
  requiredMark,
}: Props<T>): ReactElement => {
  const [open, setOpen] = useState(false);
  const {
    field: { value, onChange },
  } = useFormControl({ name, control });
  const styles = useStyles();
  const { colors } = useCustomTheme();
  const error = errors[name]?.message as string;

  const today = dayjs();
  const tomorrow = today.add(1, 'day');
  const date = value ? dayjs(value).format(DateTimeFormat.DATE_ONLY) : null;
  const time = value ? dayjs(value).format(DateTimeFormat.TIME_ONLY) : null;
  const textValue = mode === 'date' ? date : time;
  const Icon = mode === 'time' ? ClockIcon : CalendarIcon;

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
        <View style={globalStyles.flexDirectionRow}>
          <Text style={[styles.label, globalStyles.mb2, globalStyles.fs12]}>
            {label}
          </Text>
          {requiredMark && (
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
        {textValue ? (
          <Text style={[styles.input, globalStyles.fs14]}>{textValue}</Text>
        ) : (
          <Text style={[styles.placeholder, globalStyles.fs14]}>
            {placeholder}
          </Text>
        )}

        <Icon
          size={22}
          color={ColorPalette.GRAY_300}
          style={styles.inputIcon}
        />
      </TouchableOpacity>
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
