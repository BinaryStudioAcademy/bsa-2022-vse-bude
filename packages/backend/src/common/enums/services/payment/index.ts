export enum TransactionStatus {
  IN_PROCESSING = 'InProcessing',
  WAITING_AUTH_COMPLETE = 'WaitingAuthComplete',
  APPROVED = 'Approved',
  PENDING = 'Pending',
  EXPIRED = 'Expired',
  REFUNDED_VOIDED = 'Refunded/Voided',
  DECLINED = 'Declined',
  REFUND_IN_PROCESSING = 'RefundInProcessing',
}

export enum TransactionResponseStatus {
  ACCEPT = 'accept',
}
