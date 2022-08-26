import type { ua } from 'public/locales/ua';
import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof ua;
  }
}
