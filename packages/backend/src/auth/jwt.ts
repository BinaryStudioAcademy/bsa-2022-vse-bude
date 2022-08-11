import type { JwtPayload } from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface UserSessionJwtPayload extends JwtPayload {
    userId: string;
  }
}
