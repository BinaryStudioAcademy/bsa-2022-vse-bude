export interface IPostForms {
  category: string;
  title: string;
  description: string;
  price: string;
  currency: string;
  country: string;
  city: string;
  phone: string;
  callingCode: string;
  instagram: string;
  facebook: string;
  site: string;
}

export interface ICreatePost extends IPostForms {
  imageLinks: string[];
}

export interface ICreateAuction extends Omit<IPostForms, 'price'> {
  endDate: string;
  recommendedPrice: string;
  minimalBid: string;
  minimalBidCurrency: string;
  recommendedPriceCurrency: string;
}
