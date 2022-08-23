import type { HealthRepository } from '@repositories';

export class HealthService {
  private _healthRepository: HealthRepository;

  constructor(healthRepository: HealthRepository) {
    this._healthRepository = healthRepository;
  }

  select() {
    return this._healthRepository.select();
  }
}
