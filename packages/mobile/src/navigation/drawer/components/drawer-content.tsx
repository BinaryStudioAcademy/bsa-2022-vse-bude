import React, { FC } from 'react';
import i18next from 'i18next';
import { notification } from '~/services/services';
import { TouchableOpacity, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const DrawerContent: FC = () => {
  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang, (err) => {
      if (err) {
        notification.error(err);
      }
    });
  };

  return (
    <View
      style={[
        globalStyles.mt7,
        globalStyles.mr4,
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentEnd,
      ]}
    >
      <TouchableOpacity
        style={[globalStyles.py2, styles.langBtn]}
        onPress={() => handleChangeLanguage('en')}
      >
        <Text>En</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[globalStyles.py2, styles.langBtn]}
        onPress={() => handleChangeLanguage('ua')}
      >
        <Text>Ua</Text>
      </TouchableOpacity>
    </View>
  );
};

export { DrawerContent };
