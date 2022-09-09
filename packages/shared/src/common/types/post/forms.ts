export interface IPostForms {
  category: string;
  condition: string;
  title: string;
  description: string;
  price: number;
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
  recommendedPrice: number;
  minimalBid: number;
  minimalBidCurrency: string;
  recommendedPriceCurrency: string;
}
