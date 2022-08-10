export interface ISMSSenderService {
  send(phone: string, message: string): Promise<object>;
  getById(id: string): Promise<object>;
}
