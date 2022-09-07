import { MMKV } from 'react-native-mmkv';
import { ENV } from '~/common/enums/enums';
import { Http } from './http/http.service';
import { Storage } from './storage/storage.service';
import { AuthApi } from './auth-api/auth-api.service';
import { Image } from './image/image.service';
import { NotificationService } from './notification/notification.service';
import { ProductService } from './product/product.service';
import { PushController } from './push-notifications/push-notifications';
import { AppService } from './app/app.service';
import { CategoryService } from './categories/categories';

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

const categoryApi = new CategoryService({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const notification = new NotificationService();

const appService = new AppService();

const pushApi = new PushController();

export {
  storage,
  authApi,
  image,
  notification,
  productApi,
  appService,
  categoryApi,
  pushApi,
};
