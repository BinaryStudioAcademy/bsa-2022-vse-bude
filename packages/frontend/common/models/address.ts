import type { User } from './user';

export interface Address {
  id: string;
  country?: string;
  region?: string;
  city?: string;
  address?: string;
  zip?: string;
  novaPoshtaRef?: string;
  user?: User;
  userId?: string;
  createdAt: string;
  updatedAt: string;
}
