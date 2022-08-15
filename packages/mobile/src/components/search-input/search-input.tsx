import React, { FC } from 'react';
import { useEffect, useState } from '~/hooks/hooks';
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
  useEffect(() => {
    onValueChange(value);
  }, [value]);

  return (
    <View style={styles.inputContainer}>
      {title ? <Text style={styles.text}>'title'</Text> : null}
      <View style={styles.inputWrapper}>
        <SearchIcon size={20} color={ColorPalette.GRAY_300} />
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
};

export { SearchInput };
