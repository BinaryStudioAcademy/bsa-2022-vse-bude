const formatPrice = (price: number | string): string => {
  const priceAsString = price.toString();
  if (priceAsString.length > 4) {
    return `${priceAsString.slice(0, 2)} ${priceAsString.slice(2)}`;
  }
  if (priceAsString.length === 4) {
    return `${priceAsString.slice(0, 1)} ${priceAsString.slice(1)}`;
  }

  return priceAsString;
};

export { formatPrice };
