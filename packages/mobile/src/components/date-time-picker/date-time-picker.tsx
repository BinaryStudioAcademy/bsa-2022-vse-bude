import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import { useFormControl, useState, useCustomTheme } from '~/hooks/hooks';
import {
  FormControl,
  FormControlErrors,
  FormControlPath,
  FormControlValues,
} from '~/common/types/types';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { StyleProp, ViewStyle } from 'react-native';
import { DateTimeType } from '~/common/enums/ui/ui';
import { getTextValueDate } from '~/helpers/helpers';
import {
  CalendarIcon,
  ClockIcon,
  Text,
  TouchableOpacity,
  View,
  AlertIcon,
  DateTimePickerModal,
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
  required?: boolean;
};

const DatePicker = <T extends FormControlValues>({
  placeholder,
  name,
  errors,
  control,
  mode,
  label,
  contentContainerStyle,
  required,
}: Props<T>): ReactElement => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {
    field: { value, onChange },
  } = useFormControl({ name, control });
  const styles = useStyles();
  const { colors } = useCustomTheme();
  const error = errors[name]?.message as string;

  const today = dayjs();
  const tomorrow = today.add(1, 'day');

  const textValue = getTextValueDate(value, mode);

  const Icon = mode === 'time' ? ClockIcon : CalendarIcon;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date | undefined) => {
    onChange(selectedDate);
    hideDatePicker();
  };

  return (
    <View style={contentContainerStyle}>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={globalStyles.flexDirectionRow}>
          <Text style={[styles.label, globalStyles.mb2, globalStyles.fs12]}>
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
      <DateTimePickerModal
        date={value ? new Date(value) : tomorrow.toDate()}
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={tomorrow.toDate()}
      />
    </View>
  );
};

export { DatePicker };
