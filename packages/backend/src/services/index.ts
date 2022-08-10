import type { Repositories } from '@repositories';
import { RandomDataService } from './random-data';
import { UserService } from './user';
import { AuthService } from './auth';
import { HashService } from './hash';

const hashService: HashService = new HashService();

export const initServices = (repositories: Repositories) => ({
  randomDataService: new RandomDataService(repositories.randomDataRepository),
  userService: new UserService(repositories.userRepository),
  authService: new AuthService(
    repositories.userRepository,
    repositories.refreshTokenRepository,
    hashService,
  ),
});

export type Services = ReturnType<typeof initServices>;

export { type RandomDataService, type UserService, type AuthService };
