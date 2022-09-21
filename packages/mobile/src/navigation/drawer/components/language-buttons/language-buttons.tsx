import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { notification } from '~/services/services';
import { TouchableOpacity, Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { categories as categoriesActions } from '~/store/actions';
import { useAppDispatch } from '~/hooks/hooks';
import { styles } from './styles';

const LanguageButtons: FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang, (err) => {
      if (err) {
        notification.error(err);
      }
      switch (lang) {
        case 'en':
          dayjs.locale('en');
          break;
        case 'ua':
          dayjs.locale('uk');
          break;
      }
    });
    dispatch(categoriesActions.loadAllCategories());
  };

  const buttons: Record<string, string> = {
    en: 'En',
    ua: 'Ua',
  };

  return (
    <View
      style={[
        globalStyles.mr4,
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentEnd,
      ]}
    >
      {Object.keys(buttons).map((btnLang) => {
        const isCurrent = i18n.resolvedLanguage === btnLang;

        return (
          <TouchableOpacity
            onPress={() => handleChangeLanguage(btnLang)}
            key={buttons[btnLang]}
            style={[
              globalStyles.py2,
              styles.buttonWrapper,
              isCurrent && styles.current,
            ]}
          >
            <Text style={isCurrent && styles.current}>{buttons[btnLang]}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export { LanguageButtons };
