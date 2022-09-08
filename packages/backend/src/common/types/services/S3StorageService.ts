import type { Request } from 'express';

export interface UploadFileRequest extends Request {
  file: IFileUpload;
}
export interface UploadFilesRequest extends Request {
  files: IFileUpload[];
}

export interface IFileUpload {
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
