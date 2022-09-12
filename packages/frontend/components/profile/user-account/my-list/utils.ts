import type { ProductDto } from '@vse-bude/shared';
import { ProductStatus } from '@vse-bude/shared';

type TypedItemsProps = {
  items: ProductDto[];
  byStatus: string;
  byKey?: string;
};

type FilterStatuses = {
  purchased: boolean;
  sold: boolean;
  posted: boolean;
  draft: boolean;
  archived: boolean;
};

export const typedItems = ({ items, byStatus, byKey }: TypedItemsProps) => {
  if (byKey) {
    return items.filter(
      (item) => item.status === byStatus && Object.hasOwn(item, byKey),
    );
  }

  return items.filter((item) => item.status === byStatus);
};

export const filterCallback = ({
  itemsList,
  filterStatus,
  filterType,
  userId,
}: {
  itemsList: ProductDto[];
  filterStatus: FilterStatuses;
  filterType: string;
  userId: string;
}) => {
  let items = [...itemsList];
  const { purchased, sold, posted, draft, archived } = filterStatus;

  if (filterType) {
    items = items.filter((item) => item.type === filterType);
  }

  if (purchased) {
    items = items.filter(
      (item) =>
        item.status === ProductStatus.FINISHED && item?.winnerId === userId,
    );
  }

  if (sold) {
    items = items.filter(
      (item) =>
        item.status === ProductStatus.FINISHED && item?.authorId === userId,
    );
  }

  if (posted) {
    items = items.filter((item) => item.status === ProductStatus.ACTIVE);
  }

  if (draft) {
    items = items.filter((item) => item.status === ProductStatus.DRAFT);
  }

  if (archived) {
    items = items.filter((item) => item.status === ProductStatus.CANCELLED);
  }

  return items;
};
