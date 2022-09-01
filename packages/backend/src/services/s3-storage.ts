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

  deleteImage(image: string) {
    return this._client
      .deleteObject(
        {
          Bucket: this._bucketName,
          Key: image.replace(
            'https://vse-bude.fra1.digitaloceanspaces.com/',
            '',
          ),
        },
        (err) => logger.error(err),
      )
      .promise();
  }

  async uploadImage(req: UploadFileRequest): Promise<string> {
    const { file } = req;
    const uploadImage = await this.validateAndUploadImage(file, req);

    return uploadImage;
  }

  async uploadProductImages(req: UploadFilesRequest): Promise<string[]> {
    const { files } = req;

    const imagePromises = files.map((file) =>
      this.validateAndUploadImage(file, req),
    );
    const imageLinks = await Promise.all(imagePromises);

    return imageLinks;
  }

  private async validateAndUploadImage(
    file: IFileUpload,
    req: UploadFilesRequest | UploadFileRequest,
  ) {
    if (!file) {
      throw new NoFileProvidedError(req);
    }

    const extension = file.mimetype.split('/')[1];
    if (!this.isFileExtensionValid(extension)) {
      throw new UnsupportedFileExtensionError(req);
    }

    if (!this.isFileSizeValid(file.size)) {
      throw new FileSizeTooLargeError(req);
    }

    const filename = this.generateFilename(extension);
    const params = this.createUploadParams(
      filename,
      S3FolderPath.IMAGES,
      file.buffer,
    );
    const uploadImage = await this._client.upload(params).promise();
    console.log(uploadImage);

    return uploadImage.Location;
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

  private isFileExtensionValid(extension: string) {
    return extension === 'png' || extension === 'jpg' || extension === 'jpeg';
  }

  private isFileSizeValid(size: number) {
    return size <= this._maxImageSizeBytes;
  }
}
