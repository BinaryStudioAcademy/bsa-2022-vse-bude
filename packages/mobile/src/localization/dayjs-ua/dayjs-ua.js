import dayjs from 'dayjs';

export const initializeUaDayJs = () =>{
  const monthFormat = 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня.'.split('_');
  const monthStandalone = 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_');

  const monthShortFormat = 'січ._лют._берез._квіт._трав._черв._лип._серп._верес._жовт._листоп._груд.'.split('_');
  const monthShortStandalone = 'січ._лют._берез._квіт._трав._черв._лип._серп._верес._жовт._листоп._груд.'.split('_');

  const MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

  function plural(word, num) {
    const forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]) // eslint-disable-line
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    const format = {
      mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
      hh: 'година_годину_годин',
      dd: 'день_дня_днів',
      MM: 'місяць_месяця_месяців',
      yy: 'рік_року_років',
    };
    if (key === 'm') {
      return withoutSuffix ? 'хвилина' : 'хвилину';
    }

    return `${number} ${plural(format[key], +number)}`;
  }
  const months = (dayjsInstance, format) => {
    if (MONTHS_IN_FORMAT.test(format)) {
      return monthFormat[dayjsInstance.month()];
    }

  return monthStandalone[dayjsInstance.month()];
  };
  months.s = monthStandalone;
  months.f = monthFormat;

  const monthsShort = (dayjsInstance, format) => {
    if (MONTHS_IN_FORMAT.test(format)) {
      return monthShortFormat[dayjsInstance.month()];
    }

  return monthShortStandalone[dayjsInstance.month()];
  };
  monthsShort.s = monthShortStandalone;
  monthsShort.f = monthShortFormat;

  const locale = {
    name: 'ua',
    weekdays: "неділя_понеділок_вівторок_середа_четвер_п'ятниця_субота".split('_'),
    weekdaysShort: 'нед_пнд_втр_срд_чтв_птн_сбт'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    months,
    monthsShort,
    weekStart: 1,
    yearStart: 4,
    formats: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY р.',
      LLL: 'D MMMM YYYY р., H:mm',
      LLLL: 'dddd, D MMMM YYYY р., H:mm',
    },
    relativeTime: {
      future: 'через %s',
      past: '%s тому',
      s: 'декілька секунд',
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'година',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      M: 'місяц',
      MM: relativeTimeWithPlural,
      y: 'рік',
      yy: relativeTimeWithPlural,
    },
    ordinal: (n) => n,
    meridiem: (hour) => {
      if (hour < 4) {
        return 'ночі';
      } if (hour < 12) {
        return 'ранку';
      } if (hour < 17) {
        return 'дня';
      }

  return 'вечора';
    },
  };

  dayjs.locale(locale, null, true);
};

