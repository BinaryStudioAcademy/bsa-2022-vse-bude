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
  MAX_TITLE_POST_LENGTH,
  MAX_DESCRIPTION_POST_LENGTH,
  MIN_PRICE,
  MIN_BID,
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
    UAH: 'грн',
  },
  verification: {
    SIGN_IN: 'Увійти',
    EMAIL: 'Електронна пошта',
    EMAIL_HINT: 'Введіть свою електронну пошту',
    PASSWORD: 'Пароль',
    PASSWORD_REPEAT: 'Повторіть пароль',
    PASSWORD_CURRENT: 'Поточний пароль',
    PASSWORD_NEW: 'Новий пароль',
    PASSWORD_HINT: 'Введіть пароль',
    NAME: "Ім'я",
    NAME_HINT: "Введіть своє ім'я",
    LAST_NAME: 'Прізвище',
    LAST_NAME_HINT: 'Введіть своє прізвище',
    CREATE_ACCOUNT: 'Створити',
    CREATE_ACCOUNT_WELCOME: 'Створити аккаунт',
    PHONE_NUMBER: 'Номер телефону',
    PHONE_NUMBER_HINT: 'Введіть свій номер телефону',
    GOOGLE_BUTTON: 'Увійти за допомогою Google',
    FORGOT_PASSWORD: 'Забули Пароль',
    FORGOT_PASSWORD_BUTTON: 'Відновити',
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
    CITY: 'Населений пункт',
    CITY_HINT: 'Введіть населений пункт',
    ZIP_CODE: 'Поштовий індекс',
    ZIP_CODE_HINT: 'Введіть поштовий індекс',
    DELIVERY_DATA: 'Місце доставки',
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
    PERSONAL_INFO: 'Особисті дані',
    SETTINGS: 'Налаштування',
    MESSAGES: 'Повідомлення',
    SUPPORT: 'Підтримка',
    SIGN_OUT: 'Вийти',
    MY_LIST: 'Мій список',
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
    EMPTY_COUNTRY: 'Будь-ласка, введіть назву країни',
    MAX_COUNTRY_LENGTH: `Назва країни має містити не більше ${MAX_COUNTRY_LENGTH} символів`,
    MAX_REGION_LENGTH: `Назва області має містити не більше ${MAX_REGION_LENGTH} символів`,
    EMPTY_CITY: 'Будь-ласка, введіть назву населеного пункту',
    MAX_CITY_LENGTH: `Назва населеного пункту має містити не більше ${MAX_CITY_LENGTH} символів`,
    INVALID_ZIP: 'Поштовий індекс має складатися із 5 цифр',
    MAX_DELIVERY_DATA_LENGTH: `Деталі доставки мають містити не більше ${MAX_DELIVERY_DATA_LENGTH} символів`,
    INVALID_URI:
      'Приклад посилання на Ваш профіль у мережі: https://some-net/me-id-1234',
    MAX_SOCIAL_NETWORK_LENGTH: `Посилання не може перевищувати ${MAX_SOCIAL_NETWORK_LENGTH} символів`,
    MAX_IMAGE_SIZE: `Максимальний розмір файлу ${MAX_IMAGE_SIZE / 1000000} МБ`,
    CORRECTLY_FILLED: 'Будь ласка, перевірте, чи правильно заповнені поля',
    MAX_TITLE_POST_LENGTH: `Назва отвару має містити не більше ${MAX_TITLE_POST_LENGTH} символів`,
    MAX_DESCRIPTION_POST_LENGTH: `Опис отвару має містити не більше ${MAX_DESCRIPTION_POST_LENGTH} символів`,
    EMPTY_PRODUCT: 'Будь ласка, введіть назву товару',
    EMPTY_DESCRIPTION: 'Будь ласка, введіть опис товару',
    EMPTY_CONDITION: 'Будь ласка, виберіть стан товару',
    EMPTY_DATE: 'Будь ласка, виберіть кінцеву дату',
    MIN_PRICE: `Ціна не може бути нижча за ${MIN_PRICE}`,
    MIN_BID: `Ставка не може бути нижча за ${MIN_BID}`,
    NUMBER_PRICE: 'Ціна має бути числом',
    NUMBER_BID: 'Ставка має бути числом',
    TO_MANY_IMAGES: 'Ви не можете завантажити більше 30 зображень!',
    FEW_IMAGES: 'Ви повинні завантажити не менше 2 зображень!',
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
    DOWNLOAD_PHOTOS: 'Завантажені фотографії',
    SUBTITLE_PHOTOS: 'Ви можете додати від 2 до 30 фотографій',
    ADD_PHOTOS: 'Додати фото',
    DESCRIPTION: 'Опис',
    ENDING_DATE: 'Дата закінчення',
    ENDING_DATE_PLACEHOLDER: 'Оберіть дату',
    ENDING_TIME: 'Час закінчення',
    DESCRIPTION_PLACEHOLDER: 'Введіть опис товару',
    DESCRIPTION_PLACEHOLDER_AUCTION: 'Введіть опис лота',
    CONDITION: 'Стан',
    CONDITION_PLACEHOLDER: 'Виберіть стан товару',
    RECOMMENDED_PRICE: 'Початкова ціна',
    RECOMMENDED_PRICE_PLACEHOLDER: 'Введіть початкову ціну',
    RECOMMENDED_PRICE_POPOVER: 'Ціна, з якої розпочнеться аукціон',
    MINIMAL_BID: 'Мінімальна ставка',
    MINIMAL_BID_PLACEHOLDER: 'Введіть мінімальну ставку',
    MINIMAL_BID_POPOVER: 'Мінімальна різниця між ставками',
    CATEGORY: 'Категорія',
    CATEGORY_PLACEHOLDER: 'Оберіть категорію',
    TITLE_NAME: 'Назва товару',
    TITLE_NAME_PLACEHOLDER: 'Введіть назву',
    TITLE_NAME_PLACEHOLDER_AUCTION: 'Введіть назву лота',
    PRICE: 'Ціна',
    PRICE_PLACEHOLDER: 'Введіть ціну',
    PRICE_POPOVER: 'Переконайтеся, що ви ввели правильну ціну цифрами!',
    STARTING_BID_PRICE: 'Стартова ціна лоту',
    STARTING_PRICE_PLACEHOLDER: 'Введіть ціну',
    MIN_RANGE: 'Початок діапазону',
    MIN_RANGE_PLACEHOLDER: 'Мінімальна ціна',
    MAX_RANGE: 'Кінець діапазону',
    MAX_RANGE_PLACEHOLDER: 'Максимальна ціна',
    CURRENCY: 'Валюта',
    CONTACTS: 'Контакти',
    COUNTRY: 'Країна',
    DEFAULT_COUNTRY: 'Україна',
    COUNTRY_PLACEHOLDER: 'Оберіть країну',
    CITY: 'Населений пункт',
    CITY_PLACEHOLDER: 'Введіть населений пункт',
    MOBILE_PHONE: 'Телефон',
    PHONE_POPOVER:
      'Ваш номер телефону необхідно ввести у міжнародному форматі: +380123456789. Переконайтеся, що номер телефону правильний!',
    CALLING_CODE: 'Код',
    INSTAGRAM: 'Instagram',
    INSTAGRAM_PLACEHOLDER: 'Введіть URL',
    FACEBOOK: 'Facebook',
    FACEBOOK_PLACEHOLDER: 'Введіть URL',
    SITE: 'Введіть URL',
    NEW: 'Новий',
    USED: 'Був у використанні',
    SAVE_AS_DRAFT_BUTTON: 'Зберегти як чернетку',
    MAKE_POST_BUTTON: 'Створити публікацію',
    MAKE_AUCTION_BUTTON: 'Створити аукціон',
    NEW_AUCTION_CREATED: 'Новий аукціон створено!',
    NEW_POST_CREATED: 'Нову публікацію створено!',
    NEW_DRAFT_CREATED: 'Нову чернетку створено!',
  },
  home: {
    HELP_UKRAINE: 'Допоможи Україні',
    SEARCH_PLACEHOLDER: 'Знайти товари',
    ARTS: 'Мистецтво',
    TOYS: 'Іграшки',
    HOME_DECORS: 'Домашній Декор',
    APPLIANCES: 'Побутова Техніка',
    POPULAR_LOTS: 'Популярні товари аукціону',
    SEE_ALL_LOTS: 'Переглягути Усі Лоти',
    SEE_ALL_ITEMS: 'Переглягути Усі Товари',
    CHARITY_ORGANIZATIONS: 'Благодійні Організації',
    POPULAR_ITEMS: 'Популярні товари з фіксованою ціною',
  },
  type_of_post: {
    TITLE: 'Створити пост',
    HEADER: 'Який тип продажу ви оберете?',
    AUCTION: 'Аукціон',
    FIXED_PRICE: 'Фіксована ціна',
  },
  product_info: {
    TITLE: 'Деталі продукту',
    ENDING_ON: 'Закінчується',
    TIME_ZONE: 'Часовий пояс',
    STATUS: 'Стан',
    LOCATION: 'Місцезнаходження',
    DESCRIPTION: 'Опис',
    CURRENT_BID: 'Поточна ставка',
    MIN: 'Мін:',
    BID_SAVED: 'Ставка успішно розміщена',
    LEAVE_TEXT: 'Вийти з аукціону',
    LEAVE_MODAL_TEXT:
      'Ви впевнені, що бажаєте покинути аукціон? Усі ставки будуть видалені!',
    LEAVE_SUCCESS: 'Ви успішно покинули аукціон',
    NEW_BID: 'Аукціон оновився',
    NEW: 'новий',
    USED: 'вживаний',
  },
  items_and_services: {
    TITLE: 'Товари & Послуги',
  },
  filter: {
    TITLE: 'Фільтр',
    ALL: 'Усі',
    TYPE: 'Тип лоту',
    FIXED_PRICE: 'Фіксована ціна',
    AUCTION: 'Аукціон',
    CATEGORY: 'Категорія',
    PRICE: 'Ціна',
    SORT: 'Сортувати',
    CHEAP_TO_EXPENSIVE: 'Від дешевих до дорогих',
    EXPENSIVE_TO_CHEAP: 'Від дорогих до дешевих',
    NEW_TO_OLD: 'Від нових до старих',
    OLD_TO_NEW: 'Від старих до нових',
    MOST_VIEWS: 'Найбільше переглядів',
    LEAST_VIEWS: 'Найменше переглядів',
    SUBMIT: 'ЗАСТОСУВАТИ',
    CANCEL: 'СКИНУТИ',
  },
};
