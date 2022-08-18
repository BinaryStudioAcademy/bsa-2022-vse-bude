import winston from 'winston';
import { getEnv } from '@helpers';

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

  constructor() {
    const env = getEnv('NODE_ENV') || 'development';
    const transports = this.createTransports(env);
    winston.addColors(colors);

    this._logger = winston.createLogger({
      levels,
      transports,
    });
  }

  log(message: string | Record<string, unknown>) {
    this._logger.info(message);
  }

  warn(message: string | Record<string, unknown>) {
    this._logger.warn(message);
  }

  error(message: string | Record<string, unknown> | Error) {
    this._logger.error(message);
  }

  private createTransports(env: string) {
    const formats = this.getFormats();
    const transports: (
      | winston.transports.ConsoleTransportInstance
      | winston.transports.FileTransportInstance
    )[] = [
      new winston.transports.File({
        filename: 'logs/all.log',
        format: formats.fileFormat,
      }),
      new winston.transports.File({
        filename: 'logs/error.log',
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

  private getFormats() {
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

  private levelFormat = (info: winston.Logform.TransformableInfo) => {
    info.level = info.level.toUpperCase();

    return info;
  };
}

const logger = new Logger();

export { logger };
