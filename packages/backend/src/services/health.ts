import type { HealthRepository } from '@repositories';

export class HealthService {
  private _healthRepository: HealthRepository;

  constructor(healthRepository: HealthRepository) {
    this._healthRepository = healthRepository;
  }

  async getClient() {
    return await this._healthRepository.getClient();
  }

  async select() {
    return await this._healthRepository.select();
  }
}
