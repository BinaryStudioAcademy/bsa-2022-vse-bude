import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ua, en } from './languages/languages';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: true,
  lng: 'ua',
  fallbackLng: 'ua',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    ua: { translation: ua },
  },
});

export { i18n };
