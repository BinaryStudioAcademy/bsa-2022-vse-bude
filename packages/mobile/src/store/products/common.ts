enum ActionType {
  PRODUCTS_FETCH = 'products/fetch',
  POPULAR_PRODUCTS_FETCH = 'products/popular-products-fetch',
  POPULAR_LOTS_FETCH = 'products/popular-lots-fetch',
  PRODUCT_FETCH_INFO = 'product/fetch-info',
  AUCTION_PERMISSIONS = 'product/auction-permissions',
  INCREMENT_PRODUCT_VIEWS = 'product/fetch-increment-product-views',
  PLACE_BID = 'product/place-bid',
  UPDATE_CURRENT_ITEM_PRICE = 'product/update-current-item-price',
  AUCTION_LEAVE = 'product/auction-leave',
  FETCH_FAVORITES = 'products/fetch-favorites',
  FETCH_FAVORITES_IDS = 'products/fetch-favorites-ids',
  ADD_TO_FAVORITE = 'products/add-to-favorite',
  DELETE_FROM_FAVORITE = 'products/delete-from-favorite',
  CLEAN_FAVORITES_IDS = 'products/clean-favorites-ids',
  FETCH_GUEST_FAVORITES = 'products/fetch-guest-favorites',
}

export { ActionType };
