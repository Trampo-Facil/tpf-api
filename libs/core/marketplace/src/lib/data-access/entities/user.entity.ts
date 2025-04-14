import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { IWorker, Worker } from './worker.entity';

export abstract class IUser {
  abstract id: number;
  abstract name: string;
  abstract email: string;
  abstract phone: string;
  abstract worker?: IWorker;
}

@Entity({ tableName: 'user' })
export class User implements IUser {
  @PrimaryKey()
  readonly id!: number;

  @Property()
  name!: string;

  @Property({ unique: true })
  email!: string;

  @Property({ unique: true })
  phone!: string;

  // @OneToOne(() => Client, (client) => client.user, { nullable: true })
  // client?: Client;

  @OneToOne(() => Worker, { joinColumn: 'worker_id', nullable: true })
  worker?: IWorker;

  setWorker(worker: IWorker) {
    this.worker = worker;
  }
}
