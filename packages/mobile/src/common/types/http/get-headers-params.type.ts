import { HttpAcceptLanguage, HttpContentType } from '@vse-bude/shared';

type GetHeadersParams = {
  contentType?: HttpContentType;
  hasAuth?: boolean;
  locale?: HttpAcceptLanguage;
};

export type { GetHeadersParams };
