import { MAX_IMAGE_SIZE } from '@vse-bude/shared';
import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_COUNTRY_LENGTH,
  MAX_REGION_LENGTH,
  MAX_CITY_LENGTH,
  MAX_DELIVERY_DATA_LENGTH,
  MAX_SOCIAL_NETWORK_LENGTH,
} from '~/common/constants/constants';

export const screens = {
  words: {
    FIRST_NAME: "Ім'я",
    LAST_NAME: 'Прізвище',
    SELLER: 'Продавець',
    CONTACT: 'Контакти',
  },
  welcome: {
    TITLE: 'Марка "Русский военный корабль"',
    DESCRIPTION: 'Марка була випущена Укрпоштою у 2022. Вислів став відомим...',
    BET: 'Ставка',
    UAH: 'ГРН',
  },
  verification: {
    SING_IN: 'Увійти',
    EMAIL: 'Адреса електронної пошти',
    EMAIL_HINT: 'Введіть електронну адресу',
    PASSWORD: 'Пароль',
    PASSWORD_REPEAT: 'Повторіть пароль',
    PASSWORD_CURRENT: 'Поточний пароль',
    PASSWORD_NEW: 'Новий пароль',
    PASSWORD_HINT: 'Введіть пароль',
    NAME: "Ім'я",
    NAME_HINT: "Введіть своє Ім'я",
    LAST_NAME: 'Прізвище',
    LAST_NAME_HINT: 'Введіть своє Прізвище',
    CREATE_ACCOUNT: 'Створити акаунт',
    PHONE_NUMBER: 'Телефонний номер',
    PHONE_NUMBER_HINT: 'Введіть свій номер телефону',
    GOOGLE_BUTTON: 'Увійти за допомогою Google',
    FORGOT_PASSWORD: 'Забули Пароль',
    ENTER_EMAIL: 'Введіть електронну пошту, щоб отримати пароль',
    HIDE_EMAIL: 'Приховати електронну адресу',
    RESET_PASSWORD: 'Скинути пароль',
    RESET_PASSWORD_SUCCESS: 'Запит на скидання пароля успішно надіслано',
  },
  personal_info: {
    PERSONAL_INFO: 'Особиста інформація',
    ADDRESS: 'Адреса',
    COUNTRY: 'Країна',
    COUNTRY_HINT: 'Введіть країну',
    REGION: 'Регіон',
    REGION_HINT: 'Введіть регіон',
    CITY: 'Місто',
    CITY_HINT: 'Введіть місто',
    ZIP_CODE: 'Поштовий індекс',
    ZIP_CODE_HINT: 'Введіть поштовий індекс',
    DELIVERY_DATA: 'Дані про доставку',
    DELIVERY_DATA_HINT: 'Введіть адресу доставки',
    SOCIAL_NETWORKS: 'Соціальні мережі',
    INSTAGRAM_HINT: 'Введіть свій Instagram',
    LINKEDIN_HINT: 'Введіть свій Linkedin',
    FACEBOOK_HINT: 'Введіть свій Facebook',
    CHANGES_SAVED: 'Зміни збережено',
    CHANGES_CANCELED: 'Зміни скасовано',
  },
  account: {
    ACCOUNT: 'Акаунт',
    PERSONAL_INFO: 'Персональна інформація',
    SETTINGS: 'Налаштування',
    MESSAGES: 'Повідомлення',
    SUPPORT: 'Підтримка',
    SIGN_OUT: 'Вийти',
  },
  errors: {
    UNKNOWN_ERROR: 'Щось трапилось :(',
    EMPTY_EMAIL: 'Будь-ласка, введіть email',
    WRONG_EMAIL: 'Неправильна електронна адреса',
    EMPTY_FIRST_NAME: 'Будь-ласка, введіть ім`я',
    EMPTY_LAST_NAME: 'Будь-ласка, введіть прізвище',
    EMPTY_PHONE: 'Будь-ласка, введіть номер телефону',
    EMPTY_CODE: 'Будь-ласка, введіть код',
    EMPTY_PASSWORD: 'Будь-ласка, введіть пароль',
    LATIN: 'Дозволено введення лише латинських літер',
    INVALID_EMAIL: 'Неправильний формат електронної пошти',
    SPACES: 'Введення пробілів заборонено',
    MIN_PASSWORD_LENGTH: `Пароль має містити не менше ${MIN_PASSWORD_LENGTH} символів`,
    MAX_PASSWORD_LENGTH: `Пароль має містити не більше ${MAX_PASSWORD_LENGTH} символів`,
    UP_LOW_NUM:
      'Пароль має складатися щонайменше з однієї великої літери, однієї маленької літери, однієї цифри',
    INVALID_PASSWORD: 'Неправильний формат паролю',
    REPEAT_PASSWORD_INVALID: 'Паролі не співпадають',
    MIN_NAME_LENGTH: `{{name}} має містити не менше ${MIN_NAME_LENGTH} символу`,
    MAX_NAME_LENGTH: `{{name}} має містити не більше ${MAX_NAME_LENGTH} символів for Ukrainian localization`,
    FIRST_NAME_INVALID: 'Неправильний формат імені',
    LAST_NAME_INVALID: 'Неправильний формат прізвища',
    WRONG_FORMAT: 'Невірний формат',
    WRONG_FORMAT_PHONE:
      'Будь ласка, введіть телефон у міжнародному форматі: +380123456789',
    PLACE_NAME: 'Має складатися з літер: А-Я або A-Z',
    MAX_COUNTRY_LENGTH: `Назва країни має містити не більше ${MAX_COUNTRY_LENGTH} символів`,
    MAX_REGION_LENGTH: `Назва області має містити не більше ${MAX_REGION_LENGTH} символів`,
    MAX_CITY_LENGTH: `Назва населеного пункту має містити не більше ${MAX_CITY_LENGTH} символів`,
    INVALID_ZIP: 'Поштовий індекс має складатися із 5 цифр',
    MAX_DELIVERY_DATA_LENGTH: `Деталі доставки мають містити не більше ${MAX_DELIVERY_DATA_LENGTH} символів`,
    INVALID_URI:
      'Приклад посилання на Ваш профіль у мережі: https://some-net/me-id-1234',
    MAX_SOCIAL_NETWORK_LENGTH: `Посилання не може перевищувати ${MAX_SOCIAL_NETWORK_LENGTH} символів`,
    MAX_IMAGE_SIZE: `Максимальний розмір файлу ${MAX_IMAGE_SIZE / 1000000} МБ`,
    CORRECTLY_FILLED: 'Будь ласка, перевірте, чи правильно заповнені поля',
  },
  verify: {
    VERIFY: 'Підтвердити',
    VERIFY_PHONE: 'Підтвердити телефон',
    VERIFY_EMAIL: 'Підтвердити електронну адресу',
    ENTER_NUMBER: 'Введіть свій номер телефону',
    VERIFY_PHONE_TEXT:
      'Для подальшої верифікації облікового запису, будь ласка, підтвердьте свій номер телефону тут або зробіть це пізніше на сторінці особистої інформації.',
    VERIFY_EMAIL_TEXT:
      'Для подальшої верифікації облікового запису, будь ласка, підтвердьте електронну адресу тут або зробіть це пізніше на сторінці особистої інформації.',
    INPUT_LABEL_PHONE: 'Телефон',
    INPUT_LABEL_EMAIL: 'Електронна адреса',
    VERIFY_LATER: 'Пізніше',
    BACK_HOME: 'Головна',
    BACK_BUTTON: 'Назад',
    ENTER_CODE: 'Введіть код',
    JUST_SENT: 'Ми щойно надіслали код на ',
    VERIFY_CODE_EMAIL_TEXT: 'Ми надіслали код на вашу електронну адресу: ',
    INPUT_LABEL_CODE: 'Введіть код підтвердження, який ми щойно надіслали вам',
    RESEND_CODE: 'Надіслати повторно',
    CONTINUE: 'Продовжити',
    VERIFIED_TITLE_PHONE: 'Ваш телефон повністю підтверджено',
    VERIFIED_TITLE_EMAIL: 'Вашу електронну адресу повністю підтверджено',
    VERIFIED_FULLY: 'Ваш обліковий запис повністю підтверджено',
    CODE_SENT: 'Код надіслано',
  },
  make_a_post: {
    TITLE: 'Створити публікацію',
    AUCTION_TITLE: 'Створити аукціон',
    DOWNLOAD_PHOTOS: 'Завантажити зображення',
    ADD_PHOTOS: 'Додати фото',
    DESCRIPTION: 'Опис',
    ENDING_DATE: 'Дата закінчення',
    ENDING_TIME: 'Час закінчення',
    DESCRIPTION_PLACEHOLDER: 'Ввeдіть опис товару',
    CATEGORY: 'Категорія',
    CATEGORY_PLACEHOLDER: 'Оберіть категорію',
    TITLE_NAME: 'Назва товару',
    TITLE_NAME_PLACEHOLDER: 'Введіть назву',
    PRICE: 'Ціна',
    PRICE_PLACEHOLDER: 'Введіть ціну',
    PRICE_TOOLTIP: 'Інформація про ціну',
    STARTING_BID_PRICE: 'Стартова ціна лоту',
    STARTING_PRICE_PLACEHOLDER: 'Введіть ціну',
    MIN_RANGE: 'Початок діапазону',
    MIN_RANGE_PLACEHOLDER: 'Мінімальна ціна',
    MAX_RANGE: 'Кінець діапазону',
    MAX_RANGE_PLACEHOLDER: 'Максимальна ціна',
    CURRENCY: 'Валюта',
    CONTACT: 'Контактна інформація',
    COUNTRY: 'Країна',
    COUNTRY_PLACEHOLDER: 'Оберіть країну',
    CITY: 'Місто',
    CITY_PLACEHOLDER: 'Оберіть місто',
    MOBILE_PHONE: 'Телефон',
    PHONE_TOOLTIP: 'Інформація про телефон',
    CALLING_CODE: 'Код',
    INSTAGRAM: 'Instagram',
    INSTAGRAM_PLACEHOLDER: 'Введiть URL',
    FACEBOOK: 'Facebook',
    FACEBOOK_PLACEHOLDER: 'Введiть URL',
    SITE: 'Введiть URL',
  },
  home: {
    HELP_UKRAINE: 'Допоможи Україні',
    SEARCH_PLACEHOLDER: 'Знайти товари',
    ARTS: 'Мистецтво',
    TOYS: 'Іграшки',
    HOME_DECORS: 'Домашній Декор',
    APPLIANCES: 'Побутова Техніка',
    POPULAR_LOTS: 'Популярні Лоти',
    SEE_ALL_LOTS: 'Переглягути Усі Лоти',
    SEE_ALL_ITEMS: 'Переглягути Усі Товари',
    CHARITY_ORGANIZATIONS: 'Благодійні Організації',
    POPULAR_ITEMS: 'Популярні Товари',
  },
  type_of_post: {
    TITLE: 'Створити публікацію',
    HEADER: 'Який тип продажу ви оберете?',
    AUCTION: 'Аукціон',
    DIRECT_SALE: 'Продаж',
  },
  product_info: {
    TITLE: 'Деталі продукту',
    ENDING_ON: 'Закінчується',
    TIME_ZONE: 'Часовий пояс',
    STATUS: 'Стан',
    LOCATION: 'Місцезнаходження',
    DESCRIPTION: 'Опис',
    CURRENT_BID: 'Поточна ставка',
    MIN_UAH: 'Мін ГРН',
  },
};
