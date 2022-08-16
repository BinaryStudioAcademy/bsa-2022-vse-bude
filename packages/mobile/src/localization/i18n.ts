import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ua, en } from './languages/languages';

const resources = {
  en: { translation: en },
  ua: { translation: ua },
};

const i18 = () => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });
};

export { i18, resources };
