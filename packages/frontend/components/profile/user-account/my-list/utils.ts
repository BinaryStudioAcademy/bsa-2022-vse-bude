import type { ProductDto } from '@vse-bude/shared';

type TypedItemsProps = {
  items: ProductDto[];
  byStatus: string;
  byKey?: string;
};

export const typedItems = ({ items, byStatus, byKey }: TypedItemsProps) => {
  if (byKey) {
    return items.filter(
      (item) => item.status === byStatus && Object.hasOwn(item, byKey),
    );
  }

  return items.filter((item) => item.status === byStatus);
};
