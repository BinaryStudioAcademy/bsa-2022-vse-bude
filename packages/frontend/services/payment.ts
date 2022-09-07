import { http } from '@helpers';
import type { PurchaseRequestData } from '@vse-bude/shared';
import { ApiRoutes, OrderApiRoutes } from '@vse-bude/shared';

export const createPurchaseRequestData = (
  orderId: string,
): Promise<PurchaseRequestData> =>
  http.post({
    url: `${ApiRoutes.ORDERS}${OrderApiRoutes.CREATE_PAYMENT}`,
    body: { orderId },
  });
