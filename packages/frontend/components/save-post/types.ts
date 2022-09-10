import type { SelectOption } from '@components/primitives/select/types';
import { ProductStatus } from '@vse-bude/shared';
import type {
  ICreateAuction,
  IPostForms,
  ProductType,
  Condition,
} from '@vse-bude/shared';
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

export type registerFieldType = UseFormRegister<ICreateAuction | IPostForms>;
export type setValueType = UseFormSetValue<ICreateAuction | IPostForms>;
export interface DescriptionBlockProps {
  errors: FieldErrorsImpl<ICreateAuction | IPostForms>;
  register: registerFieldType;
  category: SelectOption;
  setCategories: (arg0: SelectOption) => void;
  condition: SelectOption;
  setCondition: (arg0: SelectOption) => void;
}

export interface ContactBlockProps {
  setValue: setValueType;
  errors: FieldErrorsImpl<ICreateAuction | IPostForms>;
  register: registerFieldType;
}

export type SellerFieldsType = {
  USER: SelectOption;
  OTHER: SelectOption;
};

export type ConditionFieldsType = {
  [Condition.NEW]: SelectOption;
  [Condition.USED]: SelectOption;
};

export const PostStatuses = {
  CREATE: ProductStatus.ACTIVE,
  DRAFT: ProductStatus.DRAFT,
};
