import React from 'react';
import RNCheckBox, {
  CheckBoxProps as RNCheckBoxProps,
} from '@react-native-community/checkbox';
import { ColorPalette } from '@vse-bude/shared';

type CheckBoxProps = RNCheckBoxProps;

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  return (
    <RNCheckBox
      tintColors={{
        true: ColorPalette.YELLOW_100,
        false: ColorPalette.GRAY_300,
      }}
      {...props}
    />
  );
};

export { CheckBox };
