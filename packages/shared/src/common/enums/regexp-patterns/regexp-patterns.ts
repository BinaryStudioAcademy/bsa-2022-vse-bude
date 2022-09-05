export const NAME = new RegExp(
  /^[^-'](([a-zA-Z'-]+)|([а-яёіїґєА-ЯЁIЇҐЄ'-]+))[^-']$/,
);
export const EMAIL = new RegExp(
  /^(([^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,32})(.[^.]([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,31}))*)|([a-zA-Z\d!#$%&'*+\-/=?^_`{|}~]{1,64}))@[^-]([\da-zA-Z-]{1,63}\.)([a-zA-Z]{2,6})$/,
);
export const PHONE = new RegExp(/^(\+380\d{9})$/);
export const PERSONAL_PHONE = new RegExp(/^\d{9}$/);
export const PLACE = new RegExp(/^(([a-zA-Z'-\s]+)|([а-яёіїґєА-ЯЁIЇҐЄ'-\s]+))$/);
export const PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{\]}/;:,.?]+$/,
);
export const ZIP = new RegExp(/^\d{5}$/);
