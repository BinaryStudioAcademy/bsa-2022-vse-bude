import {
  type OrderDto,
  ApiRoutes,
  OrderApiRoutes,
  OrderStatus,
} from '@vse-bude/shared';
import FormData from 'form-data';
import { getEnv, logger } from '@helpers';
import type {
  MerchantSignatureData,
  PaymentServiceStatusRequest,
  PaymentServiceStatusResponse,
  PaymentServiceStatusResponseSignature,
  PurchaseRequestData,
} from '@types';
import { ProductStatus } from '@prisma/client';
import type { OrderRepository, ProductRepository } from '@repositories';
import crypto from 'crypto';

export class PaymentService {
  readonly PRODUCT_COUNT: number;

  readonly merchantAccount: string;

  readonly merchantDomainName: string;

  readonly merchantSecretKey: string;

  readonly apiUrl: string;

  private _orderRepository: OrderRepository;

  private _productRepository: ProductRepository;

  constructor(
    orderRepository: OrderRepository,
    productRepository: ProductRepository,
  ) {
    this.PRODUCT_COUNT = 1;
    this.merchantAccount = getEnv('WAY_FOR_PAY_MERCHANT_ACCOUNT');
    this.merchantDomainName = getEnv('APP_URL');
    this.merchantSecretKey = getEnv('WAY_FOR_PAY_MERCHANT_SECRET_KEY');
    this.apiUrl = getEnv('APP_API_URL');
    this._orderRepository = orderRepository;
    this._productRepository = productRepository;
  }

  public async setStatus(body: PaymentServiceStatusRequest) {
    const { orderReference, transactionStatus } = body;

    if (transactionStatus === 'Approved') {
      try {
        const { productId } = await this._orderRepository.updateStatus(
          orderReference,
          OrderStatus.PAID,
        );
        await this._productRepository.update(productId, {
          status: ProductStatus.FINISHED,
        });
      } catch (e) {
        logger.error(e);
      }

      return {
        ...this.generateResponseData(orderReference),
      };
    }
  }

  public generateRequestData(order: OrderDto): PurchaseRequestData {
    const merchantSignature = this.generateRequestMerchantSignature(order);

    const data: PurchaseRequestData = {
      merchantAccount: this.merchantAccount,
      merchantDomainName: this.merchantDomainName,
      orderReference: order.id,
      orderDate: order.createdAt.getTime(),
      amount: order.cost,
      currency: 'UAH',
      productName: order.product.title,
      productCount: this.PRODUCT_COUNT,
      productPrice: order.product.price,
      merchantTransactionSecureType: 'AUTO',
      merchantSignature,
      returnUrl: `${this.merchantDomainName}${ApiRoutes.ORDERS}${OrderApiRoutes.SUCCESS}`,
      serviceUrl: `${this.apiUrl}${ApiRoutes.ORDERS}${OrderApiRoutes.STATUS}`,
    };

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return formData;
  }

  private generateResponseData(orderId: string): PaymentServiceStatusResponse {
    const signature = this.generateResponseSignature(orderId);

    const data: PaymentServiceStatusResponse = {
      orderReference: orderId,
      status: 'accept',
      time: Date.now(),
      signature,
    };

    return data;
  }

  private generateRequestMerchantSignature({
    id,
    createdAt,
    cost,
    product,
  }: OrderDto): string {
    const signatureData: MerchantSignatureData = {
      merchantAccount: this.merchantAccount,
      merchantDomainName: this.merchantDomainName,
      orderReference: id,
      orderDate: new Date(createdAt).getTime(),
      amount: cost,
      currency: 'UAH',
      productName: product.title,
      productCount: this.PRODUCT_COUNT,
      productPrice: product.price,
    };

    const string = Object.values(signatureData).join(';');

    const key = this.merchantSecretKey;

    const hash = crypto.createHmac('md5', key).update(string).digest('hex');

    return hash;
  }

  private generateResponseSignature(orderId: string): string {
    const signatureData: PaymentServiceStatusResponseSignature = {
      orderReference: orderId,
      status: 'accept',
      time: new Date().getTime(),
    };

    const string = Object.values(signatureData).join(';');

    const key = getEnv('WAY_FOR_PAY_MERCHANT_SECRET_KEY');

    const hash = crypto.createHmac('md5', key).update(string).digest('hex');

    return hash;
  }
}
