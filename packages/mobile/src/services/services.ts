import { MMKV } from 'react-native-mmkv';
import { ENV } from '~/common/enums/enums';
import { Http } from './http/http.service';
import { Storage } from './storage/storage.service';
import { AuthApi } from './auth-api/auth-api.service';
import { Image } from './image/image.service';
import { NotificationService } from './notification/notification.service';
import { ProductService } from './product/product.service';
import { AppService } from './app/app.service';
import { VerifyPhoneApi } from './verify-phone-api/verify-phone-api.service';

const storage = new Storage({
  storage: new MMKV(),
});

const http = new Http({
  storage,
});

const authApi = new AuthApi({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const image = new Image({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const productApi = new ProductService({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const verifyPhoneApi = new VerifyPhoneApi({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const notification = new NotificationService();

const appService = new AppService();

export {
  storage,
  authApi,
  image,
  notification,
  productApi,
  verifyPhoneApi,
  appService,
};
