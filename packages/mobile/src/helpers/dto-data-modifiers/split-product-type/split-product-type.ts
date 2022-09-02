import { ProductDto, ProductType } from '@vse-bude/shared';

const splitProductType = (productsData: ProductDto[]) => {
  const auction = productsData.filter(
    (item) => item.type === ProductType.AUCTION,
  );
  const selling = productsData.filter(
    (item) => item.type === ProductType.SELLING,
  );

  return {
    auction,
    selling,
  };
};

export { splitProductType };
