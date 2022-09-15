import type { ProductDto } from '@vse-bude/shared';
import { ProductStatus } from '@vse-bude/shared';

type FilterStatuses = {
  purchased: boolean;
  sold: boolean;
  posted: boolean;
  draft: boolean;
  archived: boolean;
};

type FilteredProducts = {
  purchased: ProductDto[] | null;
  sold: ProductDto[] | null;
  posted: ProductDto[] | null;
  drafts: ProductDto[] | null;
  archive: ProductDto[] | null;
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
}): FilteredProducts => {
  let items = [...itemsList];

  if (filterType) {
    items = items.filter((item) => item.type === filterType);
  }

  let filteredItems: FilteredProducts = items.reduce(
    (prev, item) => {
      if (item.status === ProductStatus.FINISHED && item?.winnerId === userId)
        prev.purchased.push(item);

      if (item.status === ProductStatus.FINISHED && item?.authorId === userId)
        prev.sold.push(item);

      if (item.status === ProductStatus.ACTIVE) prev.posted.push(item);

      if (item.status === ProductStatus.DRAFT) prev.drafts.push(item);

      if (item.status === ProductStatus.CANCELLED) prev.archive.push(item);

      return prev;
    },
    { purchased: [], sold: [], posted: [], drafts: [], archive: [] },
  );

  const { purchased, sold, posted, draft, archived } = filterStatus;

  if (purchased) {
    filteredItems = {
      ...filteredItems,
      sold: null,
      posted: null,
      drafts: null,
      archive: null,
    };
  }

  if (sold) {
    filteredItems = {
      ...filteredItems,
      purchased: null,
      posted: null,
      drafts: null,
      archive: null,
    };
  }

  if (posted) {
    filteredItems = {
      ...filteredItems,
      sold: null,
      purchased: null,
      drafts: null,
      archive: null,
    };
  }

  if (draft) {
    filteredItems = {
      ...filteredItems,
      sold: null,
      posted: null,
      purchased: null,
      archive: null,
    };
  }

  if (archived) {
    filteredItems = {
      ...filteredItems,
      sold: null,
      posted: null,
      drafts: null,
      purchased: null,
    };
  }

  return filteredItems;
};
