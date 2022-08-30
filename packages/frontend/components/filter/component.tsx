import type { ProductDto } from '@vse-bude/shared';
import { ProductGrid } from './product-grid/component';

interface FilterProps {
  lots: ProductDto[];
}

export const Filter = ({ lots }: FilterProps) => (
  <div>
    <ProductGrid lots={lots}></ProductGrid>
  </div>
);
