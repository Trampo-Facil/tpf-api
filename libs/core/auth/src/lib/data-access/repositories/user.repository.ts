import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { ICreateUserEntityDTO, IUser, IWorker, User } from '../entities';

export abstract class IUserRepository {
  abstract create(dto: ICreateUserEntityDTO): IUser;
  abstract save(user: IUser[]): Promise<void>;
  abstract saveWorkerUser(user: IUser, worker: IWorker): Promise<void>;
  abstract findUserByParams(params: Partial<IUser>): Promise<IUser | null>;
  abstract getUsersByParams(params: Partial<IUser>): Promise<[IUser[], number]>;
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

  saveWorkerUser(user: IUser, worker: IWorker): Promise<void> {
    return this.em.persistAndFlush([user, worker]);
  }

  findUserByParams(params: Partial<IUser>): Promise<IUser | null> {
    return this._repository.findOne(params);
  }

  getUsersByParams(params: Partial<IUser>): Promise<[IUser[], number]> {
    return this._repository.findAndCount({ ...params });
  }
}
