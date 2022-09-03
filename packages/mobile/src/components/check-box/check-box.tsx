import React, { FC } from 'react';
import { default as RNCheckBox } from '@react-native-community/checkbox';
import { useState } from '~/hooks/hooks';
import { ColorPalette } from '@vse-bude/shared';

type Props = {
  onChange: (value: boolean) => void;
};

const CheckBox: FC<Props> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const onValueChange = (newValue: boolean) => {
    onChange(newValue);
    setChecked(newValue);
  };

  return (
    <RNCheckBox
      tintColors={{
        true: ColorPalette.YELLOW_100,
        false: ColorPalette.YELLOW_100,
      }}
      value={checked}
      onValueChange={(newValue) => onValueChange(newValue)}
    />
  );
};
export { CheckBox };
