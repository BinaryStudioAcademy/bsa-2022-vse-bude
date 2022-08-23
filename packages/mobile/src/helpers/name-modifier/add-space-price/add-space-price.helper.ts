const addSpacePrice = (price: string): string => {
  return price.length > 2 ? `${price.slice(0, 2)} ${price.slice(2)}` : price;
};

export { addSpacePrice };
