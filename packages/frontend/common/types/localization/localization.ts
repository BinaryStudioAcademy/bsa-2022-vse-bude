import { ua } from 'public/locales/ua';
import { en } from 'public/locales/en';
import 'react-i18next';

const resources = {
  ua,
  en,
};

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.ua;
  }
}
