import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages } from '~/common/enums/enums';
import { ua, en } from './languages/languages';

const resources = {
  en: {
    screens: en.screens,
    common: en.common,
  },
  ua: {
    screens: ua.screens,
    common: ua.common,
  },
};

const i18 = () => {
  i18n.use(initReactI18next).init({
    ns: ['common', 'screens'],
    defaultNS: 'screens',
    compatibilityJSON: 'v3',
    // debug: true,
    lng: languages.UA,
    fallbackLng: languages.EN,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });
};

export { i18, resources };
