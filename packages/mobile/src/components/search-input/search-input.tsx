import React, { FC } from 'react';
import { useState } from '~/hooks/hooks';
import { TextInput, Text, View, SearchIcon } from '~/components/components';
import { ColorPalette } from '@vse-bude/shared';
import { styles } from './styles';

type Props = {
  placeHolder: string;
  onValueChange: (value: string) => void;
  title?: string;
};

const SearchInput: FC<Props> = ({ placeHolder, onValueChange, title }) => {
  const [value, setValue] = useState('');
  const handleChangeText = (text: string) => {
    setValue(text);
    onValueChange(value);
  };

  return (
    <View style={styles.inputContainer}>
      {!!title && <Text style={styles.text}>'title'</Text>}
      <View style={styles.inputWrapper}>
        <SearchIcon size={20} color={ColorPalette.GRAY_300} />
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  );
};

export { SearchInput };
