export interface AddProductToFavorites {
  userId: string;
  productId: string;
}

export interface DeleteProductFromFavorites {
  userId: string;
  productId: string;
}

export interface BuyProduct {
  userId: string;
  productId: string;
}
