import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'ua',
    ns: ['translation', 'personal-info', 'product', 'categories'],
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
  });

export const localizationMiddleware = middleware.handle(i18next);
