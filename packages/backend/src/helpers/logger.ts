import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { getEnv } from '@helpers';
import type { ConsoleTransportInstance } from 'winston/lib/winston/transports';

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

  private _errorFileFolder = 'logs/error';

  private _logFileFolder = 'logs/all';

  private _errorFileSize = 1048576; // 1mb

  private _logFileSize = 1048576; // 1mb

  constructor() {
    const env = getEnv('NODE_ENV') || 'development';
    const transports = this.createTransports(env);
    winston.addColors(colors);

    this._logger = winston.createLogger({
      levels,
      transports,
    });
  }

  log(message: string | Record<string, unknown>): void {
    this._logger.info(message);
  }

  warn(message: string | Record<string, unknown>): void {
    this._logger.warn(message);
  }

  error(message: string | Record<string, unknown> | Error): void {
    this._logger.error(message);
  }

  private createTransports(
    env: string,
  ): (ConsoleTransportInstance | DailyRotateFile)[] {
    const formats = this.getFormats();
    const transports: (
      | winston.transports.ConsoleTransportInstance
      | DailyRotateFile
    )[] = [
      new DailyRotateFile({
        filename: '%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH-MM',
        format: formats.fileFormat,
        maxSize: this._logFileSize,
        maxFiles: 3,
        dirname: this._logFileFolder,
      }),
      new DailyRotateFile({
        filename: '%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        level: 'error',
        format: formats.fileFormat,
        maxSize: this._errorFileSize,
        maxFiles: 3,
        dirname: this._errorFileFolder,
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
        winston.format.errors({ stack: true }),
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
        winston.format.errors({ stack: true }),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.printf(
          (info) =>
            `[${info.timestamp}] [${info.level}] : ${
              info.message
            }\n${JSON.stringify(info, null, 4)}\n\n`,
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
}

const logger = new Logger();

export { logger };
