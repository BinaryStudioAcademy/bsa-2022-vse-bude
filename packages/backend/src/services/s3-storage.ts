import S3 from 'aws-sdk/clients/s3';
import { S3FolderPath } from '@enums';
import {
  UnsupportedFileExtensionError,
  NoFileProvidedError,
  FileSizeTooLargeError,
} from '@errors';
import type { UploadFileRequest } from '@types';
import { getEnv, logger } from '@helpers';
import { randomBytes } from 'crypto';

export class S3StorageService {
  private _client: S3;

  private _maxImageSizeBytes = 5242880; // 5MB

  private _bucketName: string;

  constructor() {
    this._bucketName = getEnv('S3_BUCKET_NAME');

    this._client = new S3({
      endpoint: getEnv('S3_API_LINK'),
      credentials: {
        accessKeyId: getEnv('S3_API_KEY'),
        secretAccessKey: getEnv('S3_API_SECRET'),
      },
    });
  }

  async uploadImage(req: UploadFileRequest): Promise<string> {
    const { file } = req;

    if (!file) {
      throw new NoFileProvidedError(req);
    }

    const extension = file.mimetype.split('/')[1];
    if (!this.isFileExtensionValid(extension)) {
      throw new UnsupportedFileExtensionError(req);
    }

    if (!this.isFileSizeValid(req.file.size)) {
      throw new FileSizeTooLargeError(req);
    }

    const filename = this.generateFilename(extension);
    const params = this.createUploadParams(
      filename,
      S3FolderPath.IMAGES,
      file.buffer,
    );
    const uploadImage = await this._client.upload(params).promise();

    return uploadImage.Location;
  }

  async deleteImage(filename: string) {
    const params = this.createDeleteParams(filename, S3FolderPath.IMAGES);

    const result = await this._client
      .deleteObject(params, (err, _data) => {
        err && logger.error(err);
      })
      .promise();

    return result;
  }

  private generateFilename(extension: string) {
    return randomBytes(16).toString('hex') + `.${extension}`;
  }

  private createUploadParams(filename: string, folder: string, body: Buffer) {
    return {
      Bucket: this._bucketName,
      Key: `${folder}/${filename}`,
      Body: body,
      ACL: 'public-read',
    };
  }

  private createDeleteParams(filename: string, folder: string) {
    return {
      Bucket: this._bucketName,
      Key: `${folder}/${filename}`,
    };
  }

  private isFileExtensionValid(extension: string) {
    return extension === 'png' || extension === 'jpg' || extension === 'jpeg';
  }

  private isFileSizeValid(size: number) {
    return size <= this._maxImageSizeBytes;
  }
}
