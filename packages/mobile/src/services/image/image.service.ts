import { HttpMethod, ApiRoutes, HttpContentType } from '@vse-bude/shared';
import { Asset } from 'react-native-image-picker';
import { Http } from '~/services/http/http.service';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class Image {
  #http: Http;

  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  uploadImage(image: Asset): Promise<string> {
    const { uri, type, fileName: name } = image;

    const formData = new FormData();

    formData.append('file', { uri, type, name });

    return this.#http.load(`${this.#apiPrefix}${ApiRoutes.UPLOAD_IMAGE}`, {
      method: HttpMethod.POST,
      contentType: HttpContentType.FORM_DATA,
      payload: formData,
      hasAuth: true,
    });
  }
}

export { Image };
