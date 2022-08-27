import type { NextFunction, Request, Response } from 'express';

export const userNameValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const { firstName, lastName } = req.body;
  // const isName = /^[^-](?=.*[a-zA-Z]+)|(?=.*[а-яА-Я]+)$/.test(firstName); //!depends on user language
  // const isSurname = /^[^-](?=.*[a-zA-Z]+)|(?=.*[а-яА-Я]+)$/.test(lastName);

  // if (firstName.trim().length < 1 || lastName.trim().length < 1) {
  //   console.log('less 1');
  // }
  // if (firstName.trim().length > 40 || lastName.trim().length > 40) {
  //   console.log('more 40');
  // }
  next();
};
