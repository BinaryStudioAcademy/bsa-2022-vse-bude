const formatPrice = (price: number | string): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export { formatPrice };
