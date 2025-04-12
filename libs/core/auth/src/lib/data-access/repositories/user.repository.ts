import { Injectable } from '@nestjs/common';
import { ICreateUserEntityDTO, IUser, User } from '../entities';
import { EntityRepository, EntityManager } from '@mikro-orm/core';

export abstract class IUserRepository {
  abstract create(dto: ICreateUserEntityDTO): IUser;
  abstract save(user: IUser[]): Promise<void>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  entity = User;
  private _repository: EntityRepository<User>;

  constructor(private readonly em: EntityManager) {
    this._repository = this.em.getRepository(User);
  }

  create(dto: ICreateUserEntityDTO) {
    return this.entity.create(dto);
  }

  save(user: IUser[]): Promise<void> {
    return this.em.persistAndFlush(user);
  }
}
