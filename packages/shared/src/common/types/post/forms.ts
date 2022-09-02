export interface IPostForms {
  category: string;
  title: string;
  description: string;
  price: string;
  recommendedPrice?: number;
  minimalBid?: number;
  endDate?: string;
  endTime?: string;
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
