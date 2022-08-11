export const getBearerValue = (token: string) =>
  token.replace('Bearer', '').trim();
