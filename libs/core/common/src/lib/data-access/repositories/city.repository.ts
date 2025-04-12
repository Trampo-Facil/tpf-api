import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { ICity, City } from '../entities';
import { Injectable } from '@nestjs/common';

export abstract class ICityRepository {
  abstract getByIds(ids: number[]): Promise<ICity[]>;
}

@Injectable()
export class CityRepository implements ICityRepository {
  private _repository: EntityRepository<City>;

  constructor(private em: EntityManager) {
    this._repository = this.em.getRepository(City);
  }

  getByIds(ids: number[]): Promise<ICity[]> {
    return this._repository.find({ id: { $in: ids } });
  }
}
