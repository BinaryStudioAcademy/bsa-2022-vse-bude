export interface MerchantSignatureData {
  merchantAccount: string;
  merchantDomainName: string;
  orderReference: string;
  orderDate: number;
  amount: number;
  currency: string;
  productName: string;
  productCount: number;
  productPrice: number;
}

export interface PurchaseRequestData extends MerchantSignatureData {
  merchantTransactionSecureType: 'AUTO';
  merchantSignature: string;
  returnUrl: string;
  serviceUrl: string;
  clientFirstName?: string;
  clientLastName?: string;
  clientEmail?: string;
  clientPhone?: string;
  orderLifetime?: number;
  orderTimeout?: number;
}

export type PaymentServiceStatusRequest = {
  merchantAccount: string;
  orderReference: string;
  merchantSignature: string;
  amount: number;
  currency: string;
  authCode: string;
  email: string;
  phone: string;
  createdDate: number;
  processingDate: number;
  cardPan: string;
  cardType: string;
  issuerBankCountry: string;
  issuerBankName: string;
  recToken: string;
  transactionStatus: string;
  reason: string;
  reasonCode: number;
  fee: number;
  paymentSystem: string;
  repayUrl?: string;
};

export interface PaymentServiceStatusResponseSignature {
  orderReference: string;
  status: string;
  time: number;
}

export interface PaymentServiceStatusResponse
  extends PaymentServiceStatusResponseSignature {
  signature: string;
}
