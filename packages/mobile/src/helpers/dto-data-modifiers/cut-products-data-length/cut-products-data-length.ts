import { ProductDto } from '@vse-bude/shared';

const cutProductsDataLength = (productsData: ProductDto[]) => {
  return productsData.length > 10 ? productsData.slice(0, 11) : productsData;
};

export { cutProductsDataLength };
