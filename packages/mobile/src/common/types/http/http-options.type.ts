import { HttpContentType, HttpMethod } from '@vse-bude/shared';

type HttpOptions = {
  method?: HttpMethod;
  contentType?: HttpContentType;
  payload?: BodyInit_ | null;
  hasAuth?: boolean;
  params?: Record<string, unknown>;
};

export type { HttpOptions };
