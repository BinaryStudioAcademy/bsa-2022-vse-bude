import { Asset } from 'react-native-image-picker';
import {
  ICreateAuction,
  ICreatePost,
  ProductStatus,
  ProductType,
} from '@vse-bude/shared';

type PropsAuction = {
  data: ICreateAuction;
  images: Asset[];
  status: ProductStatus;
};

type PropsPost = {
  data: ICreatePost;
  images: Asset[];
  status: ProductStatus;
};

type MakeAuctionParser = (props: PropsAuction) => FormData | undefined;
type MakePostParser = (props: PropsPost) => FormData | undefined;

const makeAuctionParser: MakeAuctionParser = ({ data, images, status }) => {
  const formData = new FormData();

  if (images.length) {
    images.forEach(({ uri, type, fileName: name }) =>
      formData.append('images', { uri, type, name }),
    );
  }

  formData.append('type', ProductType.AUCTION);
  formData.append('status', status);

  Object.keys(data).forEach((key) => {
    if (key === 'endDate') {
      const endDate = new Date(data.endDate);
      formData.append('endDate', endDate.toISOString());

      return;
    }

    if (key === 'phone') {
      formData.append('phone', data[key] ? `+380${data[key]}` : '');

      return;
    }

    formData.append(key, data[key as keyof ICreateAuction] || '');
  });

  return formData;
};

const makePostParser: MakePostParser = ({ data, images, status }) => {
  const formData = new FormData();

  if (images.length) {
    images.forEach(({ uri, type, fileName: name }) =>
      formData.append('images', { uri, type, name }),
    );
  }

  formData.append('type', ProductType.SELLING);
  formData.append('status', status);

  Object.keys(data).forEach((key) => {
    if (key === 'phone') {
      formData.append('phone', data[key] ? `+380${data[key]}` : '');

      return;
    }

    formData.append(key, data[key as keyof ICreatePost] || '');
  });

  return formData;
};

export { makeAuctionParser, makePostParser };
