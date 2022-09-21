import type { ReactDatePickerProps } from 'react-datepicker';

interface InputStylingProps {
  variant?: 'primary' | 'secondary';
}

interface BaseInputProps {
  label?: string;
  error?: string;
}

export interface SearchProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>,
    BaseInputProps {
  onChange: (value: string, e) => void;
}

export interface PasswordProps
  extends React.HTMLProps<HTMLInputElement>,
    BaseInputProps,
    InputStylingProps {}

export interface InputProps
  extends React.HTMLProps<HTMLInputElement>,
    BaseInputProps,
    InputStylingProps {
  type: 'text' | 'email' | 'number';
  labelRequiredMark?: boolean;
  tooltip?: string;
  inerasableValue?: string;
}

export interface InputDateProps
  extends ReactDatePickerProps,
    BaseInputProps,
    InputStylingProps {
  labelRequiredMark?: boolean;
}
