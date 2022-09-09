import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { LanguageButtons } from './language-buttons/language-buttons';

const DrawerContent: FC = () => {
  return (
    <View style={globalStyles.mt7}>
      <LanguageButtons />
    </View>
  );
};

export { DrawerContent };
