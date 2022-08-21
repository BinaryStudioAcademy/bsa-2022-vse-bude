import type { HealthRepository } from '@repositories';

export class HealthService {
  private _healthRepository: HealthRepository;

  constructor(healthRepository: HealthRepository) {
    this._healthRepository = healthRepository;
  }

  public getClient(){
    return this._healthRepository.getClient();
  }

  public select(){
    return this._healthRepository.select();
  }
}
