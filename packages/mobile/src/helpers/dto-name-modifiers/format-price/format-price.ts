const formatPrice = (price: number | string): string => {
  const priceAsString = price.toString();

  return priceAsString.length > 3
    ? `${priceAsString.slice(0, 2)} ${priceAsString.slice(2)}`
    : priceAsString;
};

export { formatPrice };
