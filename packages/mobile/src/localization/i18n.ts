import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ua, en } from './languages/languages';

const i18 = () => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
  });
};

export { i18 };
