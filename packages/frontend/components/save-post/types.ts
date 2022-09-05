import type { SelectOption } from '@components/primitives/select/types';
import { ProductStatus } from '@vse-bude/shared';
import type { ICreateAuction, IPostForms, ProductType } from '@vse-bude/shared';
import type {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

type images = (File | string)[];

export interface ImageInputProps {
  images: images;
  setImages: (arg0: images) => void;
}

export interface SavePostProps {
  edit?: boolean;
  type: ProductType.AUCTION | ProductType.SELLING;
}

export interface DescriptionBlockProps {
  errors: FieldErrorsImpl<ICreateAuction | IPostForms>;
  register: UseFormRegister<ICreateAuction | IPostForms>;
  category: SelectOption;
  setCategories: (arg0: SelectOption) => void;
}

export interface ContactBlockProps {
  setValue: UseFormSetValue<ICreateAuction | IPostForms>;
  errors: FieldErrorsImpl<ICreateAuction | IPostForms>;
  register: UseFormRegister<ICreateAuction | IPostForms>;
}

export type SellerFieldsType = {
  USER: SelectOption;
  OTHER: SelectOption;
};

export const PostStatuses = {
  CREATE: ProductStatus[0],
  DRAFT: ProductStatus[5],
};
