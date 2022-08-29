import type { NextFunction, Request, Response } from 'express';

export const passwordValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const { password, newPassword, repeatPassword } = req.body;
  // //!need to check current password (crypto)
  // const isNew =
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z~!@#$%^*\-_=+[{\]}/;:,.?]+$/.test(
  //     newPassword,
  //   );
  // if (!isNew) {
  //   console.log('pattern error');
  // }
  // if(newPassword !== repeatPassword) {
  //   console.log('not the same!')
  // }
  // if(newPassword.includes(' ')) {
  //   console.log('whitespaces error!')
  // }
  // if(!/^[А-ЯЁIЇҐЄЂЃЀЅЍЈЉЊЋЌЎа-яёіїґєђѓѐѕѝјљњћќў]+$/.test(newPassword)) {
  //   console.log('only latin symbols!')
  // }
  next();
};
