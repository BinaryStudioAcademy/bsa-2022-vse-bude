import React, { FC, useState } from 'react';
import i18next from 'i18next';
import { ColorPalette, DEFAULT_LOCALE } from '@vse-bude/shared';
import { notification } from '~/services/services';
import { TouchableOpacity, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

const LanguageButtons: FC = () => {
  const [currentLang, setCurrentLang] = useState(i18next.language);
  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang, (err) => {
      setCurrentLang(lang);
      if (err) {
        notification.error(err);
      }
    });
  };
  const isUa = currentLang == DEFAULT_LOCALE;

  return (
    <View
      style={[
        globalStyles.mr4,
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentEnd,
      ]}
    >
      <TouchableOpacity
        style={[
          isUa
            ? { backgroundColor: ColorPalette.GRAY_100 }
            : { backgroundColor: ColorPalette.YELLOW_200 },
          globalStyles.py2,
          styles.buttonWrapper,
        ]}
        onPress={() => handleChangeLanguage('en')}
      >
        <Text
          style={{
            color: isUa ? ColorPalette.GREEN_200 : ColorPalette.WHITE_100,
          }}
        >
          En
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          isUa
            ? { backgroundColor: ColorPalette.YELLOW_200 }
            : { backgroundColor: ColorPalette.GRAY_100 },
          globalStyles.py2,
          styles.buttonWrapper,
        ]}
        onPress={() => handleChangeLanguage('ua')}
      >
        <Text
          style={{
            color: isUa ? ColorPalette.WHITE_100 : ColorPalette.GREEN_200,
          }}
        >
          Ua
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { LanguageButtons };
