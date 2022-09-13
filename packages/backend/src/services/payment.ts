import { ApiRoutes, OrderApiRoutes, OrderStatus } from '@vse-bude/shared';
import type {
  OrderDto,
  MerchantSignatureData,
  PaymentServiceStatusResponse,
  PaymentServiceStatusResponseSignature,
  PurchaseRequestData,
  PaymentServiceStatusRequest,
} from '@vse-bude/shared';
import { getEnv, logger } from '@helpers';
import { ProductStatus } from '@prisma/client';
import type { OrderRepository, ProductRepository } from '@repositories';
import { UnauthorizedError } from '@errors';
import {
  TransactionResponseStatus,
  TransactionStatus,
} from 'common/enums/services/payment';
import crypto from 'crypto';

export class PaymentService {
  private readonly PRODUCT_COUNT: number;

  private readonly merchantAccount: string;

  private readonly merchantDomainName: string;

  private readonly merchantSecretKey: string;

  private readonly apiUrl: string;

  private readonly _orderRepository: OrderRepository;

  private readonly _productRepository: ProductRepository;

  private readonly ORDER_TIMEOUT_IN_SECONDS: number;

  private readonly ORDER_LIFETIME_IN_SECONDS: number;

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
    this.ORDER_TIMEOUT_IN_SECONDS = 600;
    this.ORDER_LIFETIME_IN_SECONDS = 600;
  }

  public async setStatus(body: string): Promise<PaymentServiceStatusResponse> {
    const data = Object.keys(body)[0];

    const {
      orderReference,
      transactionStatus,
      reason,
      reasonCode,
    }: PaymentServiceStatusRequest = JSON.parse(data);

    logger.log({ orderReference, transactionStatus, reason, reasonCode });

    const { productId, createdAt } = await this._orderRepository.getById(
      orderReference,
    );

    if (transactionStatus === TransactionStatus.APPROVED) {
      await this._productRepository.update(productId, {
        status: ProductStatus.FINISHED,
      });

      await this._orderRepository.updateStatus(
        orderReference,
        OrderStatus.PAID,
      );

      return {
        ...this.generateResponseData(orderReference, createdAt),
      };
    }

    const isTransactionDeclined = [
      TransactionStatus.DECLINED,
      TransactionStatus.REFUNDED_VOIDED,
      TransactionStatus.REFUND_IN_PROCESSING,
      TransactionStatus.EXPIRED,
    ].includes(transactionStatus as TransactionStatus);

    if (isTransactionDeclined) {
      await this._productRepository.update(productId, {
        status: ProductStatus.ACTIVE,
      });

      await this._orderRepository.updateStatus(
        orderReference,
        OrderStatus.CREATED,
      );

      return {
        ...this.generateResponseData(orderReference, createdAt),
      };
    }

    return {
      ...this.generateResponseData(orderReference, createdAt),
    };
  }

  public async createRequestData(
    orderId: string,
    userId: string,
  ): Promise<PurchaseRequestData> {
    const order = await this._orderRepository.getById(orderId);

    if (userId !== order.buyerId) {
      throw new UnauthorizedError();
    }

    const merchantSignature = this.generateRequestMerchantSignature(
      order as unknown as OrderDto,
    );

    const data: PurchaseRequestData = {
      merchantAccount: this.merchantAccount,
      merchantDomainName: this.merchantDomainName,
      orderReference: order.id,
      orderDate: new Date(order.createdAt).getTime(),
      amount: Number(order.cost),
      currency: 'UAH',
      productName: order.product.title,
      productCount: this.PRODUCT_COUNT,
      productPrice: Number(order.product.price),
      merchantTransactionSecureType: 'AUTO',
      merchantSignature,
      returnUrl: `${this.apiUrl}${ApiRoutes.ORDERS}${OrderApiRoutes.SUCCESS}`,
      serviceUrl: `${this.apiUrl}${ApiRoutes.ORDERS}${OrderApiRoutes.STATUS}`,
      clientFirstName: order.buyer.firstName,
      clientLastName: order.buyer.lastName,
      clientPhone: order.buyer.phone,
      clientEmail: order.buyer.email,
      orderLifetime: this.ORDER_LIFETIME_IN_SECONDS,
      orderTimeout: this.ORDER_TIMEOUT_IN_SECONDS,
    };

    return data;
  }

  private async generateResponseData(
    orderId: string,
    orderCreatedAt: Date,
  ): Promise<PaymentServiceStatusResponse> {
    const signature = await this.generateResponseSignature(
      orderId,
      orderCreatedAt,
    );

    const data: PaymentServiceStatusResponse = {
      orderReference: orderId,
      status: TransactionResponseStatus.ACCEPT,
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
      amount: Number(cost),
      currency: 'UAH',
      productName: product.title,
      productCount: this.PRODUCT_COUNT,
      productPrice: product.price,
    };

    const string = Object.values(signatureData).join(';');

    return this.createHash(string);
  }

  private async generateResponseSignature(
    orderId: string,
    orderCreatedAt: Date,
  ): Promise<string> {
    const signatureData: PaymentServiceStatusResponseSignature = {
      orderReference: orderId,
      status: TransactionResponseStatus.ACCEPT,
      time: new Date(orderCreatedAt).getTime(),
    };

    const string = Object.values(signatureData).join(';');

    return this.createHash(string);
  }

  private createHash(string: string): string {
    const key = this.merchantSecretKey;

    const hash = crypto.createHmac('md5', key).update(string).digest('hex');

    return hash;
  }
}
