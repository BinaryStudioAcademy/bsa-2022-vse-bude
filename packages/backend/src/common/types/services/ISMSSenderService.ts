export interface ISMSSenderService {
  send(phone: string, message: string): Promise<boolean>;
  getById(id: string): Promise<object>;
}
