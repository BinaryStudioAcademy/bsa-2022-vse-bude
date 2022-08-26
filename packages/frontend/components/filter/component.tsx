import type { ProductDto } from "@vse-bude/shared";
import { ProductGrid } from "./product-grid/component";

  interface FilterProps {
    filter: string;
    lots: ProductDto[];
  }
  
  export const Filter = ({ filter, lots }: FilterProps) => (
    <div>
      {filter}
      <ProductGrid lots={lots}></ProductGrid>
    </div>    
  );
