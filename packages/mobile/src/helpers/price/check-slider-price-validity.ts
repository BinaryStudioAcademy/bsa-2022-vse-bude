import {
  MINIMUM_SLIDER_PRICE,
  MAXIMUM_SLIDER_PRICE,
} from '~/common/constants/constants';

const checkSliderPriceValidity = (price: string) => {
  const priceAsNumber = +price.replace(/\D/gi, '');
  if (priceAsNumber < MINIMUM_SLIDER_PRICE) {
    return MINIMUM_SLIDER_PRICE;
  }
  if (priceAsNumber > MAXIMUM_SLIDER_PRICE) {
    return MAXIMUM_SLIDER_PRICE;
  }

  return priceAsNumber;
};

export { checkSliderPriceValidity };
