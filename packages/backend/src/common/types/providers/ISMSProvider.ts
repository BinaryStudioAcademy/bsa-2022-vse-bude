export interface ISMSProvider {
  send(phone: string, message: string): Promise<boolean>;
  getById(id: string): Promise<object>;
}
