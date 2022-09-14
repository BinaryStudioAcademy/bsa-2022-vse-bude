import type {
  DeleteObjectOutput,
  DeleteObjectRequest,
  PutObjectRequest,
} from 'aws-sdk/clients/s3';
import S3 from 'aws-sdk/clients/s3';
import { S3FolderPath } from '@enums';
import {
  UnsupportedFileExtensionError,
  NoFileProvidedError,
  FileSizeTooLargeError,
} from '@errors';
import type {
  IFileUpload,
  UploadFileRequest,
  UploadFilesRequest,
} from '@types';
import { getEnv, logger } from '@helpers';
import { MAX_IMAGE_SIZE } from '@vse-bude/shared';
import type { AWSError } from 'aws-sdk';
import type { PromiseResult } from 'aws-sdk/lib/request';
import { randomBytes } from 'crypto';

export class S3StorageService {
  private _client: S3;

  private _maxImageSizeBytes = MAX_IMAGE_SIZE;

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

  async deleteImage(
    filename: string,
  ): Promise<PromiseResult<DeleteObjectOutput, AWSError>> {
    console.log(filename);
    const params = this.createDeleteParams(filename, S3FolderPath.IMAGES);

    const result = await this._client
      .deleteObject(params, (err, _data) => {
        err && logger.error(err);
      })
      .promise();

    return result;
  }

  async uploadImage(req: UploadFileRequest): Promise<string> {
    return await this.validateAndUploadImage(req.file);
  }

  async uploadProductImages(req: UploadFilesRequest): Promise<string[]> {
    const { files } = req;

    const imagePromises = files.map((file) =>
      this.validateAndUploadImage(file),
    );

    return await Promise.all(imagePromises);
  }

  private async validateAndUploadImage(file: IFileUpload): Promise<string> {
    if (!file) {
      throw new NoFileProvidedError();
    }

    const extension = file.mimetype.split('/')[1];
    if (!this.isFileExtensionValid(extension)) {
      throw new UnsupportedFileExtensionError();
    }

    if (!this.isFileSizeValid(file.size)) {
      throw new FileSizeTooLargeError();
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

  private generateFilename(extension: string): string {
    return randomBytes(16).toString('hex') + `.${extension}`;
  }

  private createUploadParams(
    filename: string,
    folder: string,
    body: Buffer,
  ): PutObjectRequest {
    return {
      Bucket: this._bucketName,
      Key: `${folder}/${filename}`,
      Body: body,
      ACL: 'public-read',
    };
  }

  private createDeleteParams(
    filename: string,
    folder: string,
  ): DeleteObjectRequest {
    return {
      Bucket: this._bucketName,
      Key: `${folder}/${filename}`,
    };
  }

  private isFileExtensionValid(extension: string): boolean {
    return extension === 'png' || extension === 'jpg' || extension === 'jpeg';
  }

  private isFileSizeValid(size: number): boolean {
    return size <= this._maxImageSizeBytes;
  }
}
