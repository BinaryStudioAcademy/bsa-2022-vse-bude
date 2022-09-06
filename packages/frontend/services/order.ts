import { http } from '@helpers';
import type { OrderDto, PurchaseRequestData } from '@vse-bude/shared';
import { ApiRoutes } from '@vse-bude/shared';

export const createOrder = (productId: string): Promise<OrderDto> =>
  http.post({
    url: `${ApiRoutes.ORDERS}`,
    body: { productId },
  });

export const getOrderById = (id: string): Promise<PurchaseRequestData> =>
  http.get({
    url: `${ApiRoutes.ORDERS}/${id}`,
  });
