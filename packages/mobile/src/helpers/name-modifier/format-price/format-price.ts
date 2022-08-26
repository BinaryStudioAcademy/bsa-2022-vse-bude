const formatPrice = (price: number | string): string => {
  price = price.toString();

  return price.length > 2 ? `${price.slice(0, 2)} ${price.slice(2)}` : price;
};

export { formatPrice };
