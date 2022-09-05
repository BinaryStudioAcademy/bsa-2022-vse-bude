import React, { FC } from 'react';
import { useState } from '~/hooks/hooks';
import { TextInput, View, SearchIcon } from '~/components/components';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  placeHolder: string;
  onValueChange: (value: string) => void;
};

const SearchInput: FC<Props> = ({ placeHolder, onValueChange }) => {
  const [value, setValue] = useState('');
  const handleChangeText = (text: string) => {
    setValue(text);
    onValueChange(value);
  };

  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentCenter,
        styles.inputContainer,
      ]}
    >
      <View
        style={[
          styles.inputWrapper,
          globalStyles.alignItemsCenter,
          globalStyles.flexDirectionRow,
          globalStyles.px3,
        ]}
      >
        <SearchIcon size={20} color={ColorPalette.GRAY_300} />
        <TextInput
          style={[styles.input, globalStyles.fs16]}
          placeholder={placeHolder}
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  );
};

export { SearchInput };
