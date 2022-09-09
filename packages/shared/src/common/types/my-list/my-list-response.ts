import type {
  PostedItems,
  PurchasedItems,
  DraftedItems,
  SoldItems,
} from './items-my-list';

export interface MyList {
  purchased: PurchasedItems[];
  sold: SoldItems[];
  posted: PostedItems[];
  drafted: DraftedItems[];
}
