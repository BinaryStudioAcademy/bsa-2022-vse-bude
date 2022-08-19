/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
  HttpStatusCodeLiteral,
  TsoaResponse,
  fetchMiddlewares,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CategoryRepository } from './../src/repositories/category';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProductRepository } from './../src/repositories/product';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { NewsRepository } from './../src/repositories/news';
import type { RequestHandler } from 'express';
import * as express from 'express';
import { prismaClient } from 'data/db';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  'Category': {
    'dataType': 'refAlias',
    'type': {
      'dataType': 'nestedObjectLiteral',
      'nestedProperties': {
        'updatedAt': { 'dataType': 'datetime', 'required': true },
        'image': {
          'dataType': 'union',
          'subSchemas': [
            { 'dataType': 'string' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'createdAt': { 'dataType': 'datetime', 'required': true },
        'title': { 'dataType': 'string', 'required': true },
        'id': { 'dataType': 'string', 'required': true },
      },
      'validators': {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Prisma.Decimal': {
    'dataType': 'refAlias',
    'type': { 'dataType': 'string', 'validators': {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'ProductType': {
    'dataType': 'refAlias',
    'type': {
      'dataType': 'union',
      'subSchemas': [
        { 'dataType': 'enum', 'enums': ['AUCTION'] },
        { 'dataType': 'enum', 'enums': ['SELLING'] },
      ],
      'validators': {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'ProductStatus': {
    'dataType': 'refAlias',
    'type': {
      'dataType': 'union',
      'subSchemas': [
        { 'dataType': 'enum', 'enums': ['CREATED'] },
        { 'dataType': 'enum', 'enums': ['ACTIVE'] },
        { 'dataType': 'enum', 'enums': ['CANCELLED'] },
        { 'dataType': 'enum', 'enums': ['FINISHED'] },
        { 'dataType': 'enum', 'enums': ['CLOSED'] },
        { 'dataType': 'enum', 'enums': ['DRAFT'] },
      ],
      'validators': {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Product': {
    'dataType': 'refAlias',
    'type': {
      'dataType': 'nestedObjectLiteral',
      'nestedProperties': {
        'updatedAt': { 'dataType': 'datetime', 'required': true },
        'createdAt': { 'dataType': 'datetime', 'required': true },
        'winnerId': {
          'dataType': 'union',
          'subSchemas': [
            { 'dataType': 'string' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'categoryId': {
          'dataType': 'union',
          'subSchemas': [
            { 'dataType': 'string' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'authorId': { 'dataType': 'string', 'required': true },
        'cancellReason': {
          'dataType': 'union',
          'subSchemas': [
            { 'dataType': 'string' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'endDate': {
          'dataType': 'union',
          'subSchemas': [
            { 'dataType': 'datetime' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'status': { 'ref': 'ProductStatus', 'required': true },
        'type': { 'ref': 'ProductType', 'required': true },
        'city': {
          'dataType': 'union',
          'subSchemas': [
            { 'dataType': 'string' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'imageLinks': {
          'dataType': 'array',
          'array': { 'dataType': 'string' },
          'required': true,
        },
        'minimalBid': {
          'dataType': 'union',
          'subSchemas': [
            { 'ref': 'Prisma.Decimal' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'recomendedPrice': {
          'dataType': 'union',
          'subSchemas': [
            { 'ref': 'Prisma.Decimal' },
            { 'dataType': 'enum', 'enums': [null] },
          ],
          'required': true,
        },
        'price': { 'ref': 'Prisma.Decimal', 'required': true },
        'description': { 'dataType': 'string', 'required': true },
        'title': { 'dataType': 'string', 'required': true },
        'id': { 'dataType': 'string', 'required': true },
      },
      'validators': {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'News': {
    'dataType': 'refAlias',
    'type': {
      'dataType': 'nestedObjectLiteral',
      'nestedProperties': {
        'updatedAt': { 'dataType': 'datetime', 'required': true },
        'createdAt': { 'dataType': 'datetime', 'required': true },
        'image': { 'dataType': 'string', 'required': true },
        'description': { 'dataType': 'string', 'required': true },
        'content': { 'dataType': 'string', 'required': true },
        'title': { 'dataType': 'string', 'required': true },
        'id': { 'dataType': 'string', 'required': true },
      },
      'validators': {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.get(
    '/category/getAll',
    ...fetchMiddlewares<RequestHandler>(CategoryRepository),
    ...fetchMiddlewares<RequestHandler>(CategoryRepository.prototype.getAll),

    function CategoryRepository_getAll(request: any, response: any, next: any) {
      const args = {
        take: {
          'in': 'query',
          'name': 'take',
          'required': true,
          'dataType': 'double',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new CategoryRepository(prismaClient);

        const promise = controller.getAll.apply(
          controller,
          validatedArgs as any,
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/product/getAll',
    ...fetchMiddlewares<RequestHandler>(ProductRepository),
    ...fetchMiddlewares<RequestHandler>(ProductRepository.prototype.getAll),

    function ProductRepository_getAll(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new ProductRepository(prismaClient);

        const promise = controller.getAll.apply(
          controller,
          validatedArgs as any,
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/product/getByType',
    ...fetchMiddlewares<RequestHandler>(ProductRepository),
    ...fetchMiddlewares<RequestHandler>(ProductRepository.prototype.getByType),

    function ProductRepository_getByType(
      request: any,
      response: any,
      next: any,
    ) {
      const args = {
        type: {
          'in': 'query',
          'name': 'type',
          'required': true,
          'ref': 'ProductType',
        },
        take: {
          'in': 'query',
          'name': 'take',
          'required': true,
          'dataType': 'double',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new ProductRepository(prismaClient);

        const promise = controller.getByType.apply(
          controller,
          validatedArgs as any,
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/news/getAll',
    ...fetchMiddlewares<RequestHandler>(NewsRepository),
    ...fetchMiddlewares<RequestHandler>(NewsRepository.prototype.getAll),

    function NewsRepository_getAll(request: any, response: any, next: any) {
      const args = {
        take: {
          'in': 'query',
          'name': 'take',
          'required': true,
          'dataType': 'double',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new NewsRepository(prismaClient);

        const promise = controller.getAll.apply(
          controller,
          validatedArgs as any,
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      'getHeaders' in object && 'getStatus' in object && 'setStatus' in object
    );
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    successStatus: any,
    next: any,
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode = successStatus;
        let headers;
        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus() || statusCode;
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        returnHandler(response, statusCode, data, headers);
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(
    response: any,
    statusCode?: number,
    data?: any,
    headers: any = {},
  ) {
    if (response.headersSent) {
      return;
    }
    Object.keys(headers).forEach((name: string) => {
      response.set(name, headers[name]);
    });
    if (
      data &&
      typeof data.pipe === 'function' &&
      data.readable &&
      typeof data._read === 'function'
    ) {
      data.pipe(response);
    } else if (data !== null && data !== undefined) {
      response.status(statusCode || 200).json(data);
    } else {
      response.status(statusCode || 204).end();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    response: any,
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(response, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, request: any, response: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors,
            undefined,
            { 'noImplicitAdditionalProperties': 'throw-on-extras' },
          );
        case 'path':
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors,
            undefined,
            { 'noImplicitAdditionalProperties': 'throw-on-extras' },
          );
        case 'header':
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors,
            undefined,
            { 'noImplicitAdditionalProperties': 'throw-on-extras' },
          );
        case 'body':
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            undefined,
            { 'noImplicitAdditionalProperties': 'throw-on-extras' },
          );
        case 'body-prop':
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            'body.',
            { 'noImplicitAdditionalProperties': 'throw-on-extras' },
          );
        case 'formData':
          if (args[key].dataType === 'file') {
            return validationService.ValidateParam(
              args[key],
              request.file,
              name,
              fieldErrors,
              undefined,
              { 'noImplicitAdditionalProperties': 'throw-on-extras' },
            );
          } else if (
            args[key].dataType === 'array' &&
            args[key].array.dataType === 'file'
          ) {
            return validationService.ValidateParam(
              args[key],
              request.files,
              name,
              fieldErrors,
              undefined,
              { 'noImplicitAdditionalProperties': 'throw-on-extras' },
            );
          } else {
            return validationService.ValidateParam(
              args[key],
              request.body[name],
              name,
              fieldErrors,
              undefined,
              { 'noImplicitAdditionalProperties': 'throw-on-extras' },
            );
          }
        case 'res':
          return responder(response);
      }
    });

    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
