type CreateRefreshTokenDto = {
  userId: string;
  token: string;
  expiresAt: Date;
};

export { type CreateRefreshTokenDto };
