import winston from 'winston';
import { getEnv } from '@helpers';
import type {
  ConsoleTransportInstance,
  FileTransportInstance,
} from 'winston/lib/winston/transports';
import fs from 'fs';
import path from 'path';

function checkFileSize(fileSizeBytes: number, filename: string): void {
  const filepathAbsolute = path.resolve(filename);

  try {
    const size = fs.statSync(filepathAbsolute).size;

    if (size <= fileSizeBytes) {
      return;
    }

    let data = fs.readFileSync(filepathAbsolute, 'utf8');

    while (Buffer.byteLength(data) > fileSizeBytes) {
      data = data.split('\n').slice(1).join('\n');
    }

    fs.writeFileSync(filepathAbsolute, data);
  } catch (e) {
    console.log(e);
  }
}

const levels = {
  error: 0,
  warn: 1,
  info: 2,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'blue',
};

class Logger {
  private _logger: winston.Logger;

  private _errorFilename = 'logs/error.log';

  private _logFilename = 'logs/all.log';

  private _errorFileSize = 5242880; // 5mb

  private _logFileSize = 5242880; // 5mb

  constructor() {
    const env = getEnv('NODE_ENV') || 'development';
    const transports = this.createTransports(env);
    winston.addColors(colors);

    this._logger = winston.createLogger({
      levels,
      transports,
    });

    this.createLogFiles();
  }

  log(message: string | Record<string, unknown>): void {
    this._logger.info(message);
    this.checkLogFileSize();
  }

  warn(message: string | Record<string, unknown>): void {
    this._logger.warn(message);
    this.checkLogFileSize();
  }

  error(message: string | Record<string, unknown> | Error): void {
    this._logger.error(message);
    this.checkLogFileSize();
    this.checkErrorFileSize();
  }

  private checkLogFileSize(): void {
    checkFileSize(this._logFileSize, this._logFilename);
  }

  private checkErrorFileSize(): void {
    checkFileSize(this._errorFileSize, this._errorFilename);
  }

  private createTransports(
    env: string,
  ): (ConsoleTransportInstance | FileTransportInstance)[] {
    const formats = this.getFormats();
    const transports: (
      | winston.transports.ConsoleTransportInstance
      | winston.transports.FileTransportInstance
    )[] = [
      new winston.transports.File({
        filename: this._logFilename,
        format: formats.fileFormat,
      }),
      new winston.transports.File({
        filename: this._errorFilename,
        level: 'error',
        format: formats.fileFormat,
      }),
    ];

    if (env !== 'production') {
      transports.push(
        new winston.transports.Console({
          format: formats.consoleFormat,
        }),
      );
    }

    return transports;
  }

  private getFormats(): {
    consoleFormat: winston.Logform.Format;
    fileFormat: winston.Logform.Format;
  } {
    return {
      consoleFormat: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.label({
          label: '[LOGGER]',
        }),
        winston.format(this.levelFormat)(),
        winston.format.printf(
          (info) =>
            `${info.label}  [${info.timestamp}]  [${info.level}] : ${info.message}`,
        ),
        winston.format.colorize({ all: true }),
      ),
      fileFormat: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.printf(
          (info) =>
            `${JSON.stringify({
              timestamp: info.timestamp,
              level: info.level,
              message: info.message,
              ...info,
            })}`,
        ),
      ),
    };
  }

  private levelFormat = (
    info: winston.Logform.TransformableInfo,
  ): winston.Logform.TransformableInfo => {
    info.level = info.level.toUpperCase();

    return info;
  };

  private createLogFiles(): void {
    const errorFilePath = path.resolve(this._errorFilename);
    const logFilePath = path.resolve(this._logFilename);

    try {
      fs.writeFileSync(errorFilePath, '', { flag: 'a+' });
      fs.writeFileSync(logFilePath, '', { flag: 'a+' });
    } catch (e) {
      console.log(e);
    }
  }
}

const logger = new Logger();

export { logger };
