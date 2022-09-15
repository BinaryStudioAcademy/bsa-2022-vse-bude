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

  let filteredItemsitems: FilteredProducts = {
    purchased: items.filter(
      (item) =>
        item.status === ProductStatus.FINISHED && item?.winnerId === userId,
    ),
    sold: items.filter(
      (item) =>
        item.status === ProductStatus.FINISHED && item?.authorId === userId,
    ),
    posted: items.filter((item) => item.status === ProductStatus.ACTIVE),
    drafts: items.filter((item) => item.status === ProductStatus.DRAFT),
    archive: items.filter((item) => item.status === ProductStatus.CANCELLED),
  };

  const { purchased, sold, posted, draft, archived } = filterStatus;

  if (purchased) {
    filteredItemsitems = {
      ...filteredItemsitems,
      sold: null,
      posted: null,
      drafts: null,
      archive: null,
    };
  }

  if (sold) {
    filteredItemsitems = {
      ...filteredItemsitems,
      purchased: null,
      posted: null,
      drafts: null,
      archive: null,
    };
  }

  if (posted) {
    filteredItemsitems = {
      ...filteredItemsitems,
      sold: null,
      purchased: null,
      drafts: null,
      archive: null,
    };
  }

  if (draft) {
    filteredItemsitems = {
      ...filteredItemsitems,
      sold: null,
      posted: null,
      purchased: null,
      archive: null,
    };
  }

  if (archived) {
    filteredItemsitems = {
      ...filteredItemsitems,
      sold: null,
      posted: null,
      drafts: null,
      purchased: null,
    };
  }

  return filteredItemsitems;
};
