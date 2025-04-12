import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { IWorker, Worker } from './worker.entity';

export interface ICreateUserEntityDTO {
  name: string;
  password: string;
  email: string;
}
export abstract class IUser {
  abstract id: number;
  abstract name: string;
  abstract password: string;
  abstract email: string;
  abstract worker?: IWorker;

  abstract setWorker(worker: IWorker): void;
}

@Entity({ tableName: 'user' })
export class User implements IUser {
  @PrimaryKey()
  readonly id!: number;

  @Property()
  name!: string;

  @Property({ hidden: true })
  password!: string;

  @Property({ unique: true })
  email!: string;

  // @OneToOne(() => Client, (client) => client.user, { nullable: true })
  // client?: Client;

  @OneToOne(() => Worker, { joinColumn: 'worker_id', nullable: true })
  worker?: IWorker;

  constructor(props: ICreateUserEntityDTO) {
    const { name, password, email } = props;
    this.name = name;
    this.password = password;
    this.email = email;
  }

  static create(props: ICreateUserEntityDTO): IUser {
    return new User(props);
  }

  setWorker(worker: IWorker) {
    this.worker = worker;
  }
}
