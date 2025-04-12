import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import {
  IJobCategory,
  IJobOccupation,
  JobCategory,
  JobOccupation,
} from '@tpf/common';

export abstract class IUser {
  id!: number;
  name!: string;
  password!: string;
  email!: string;
  jobOccupation?: Collection<IJobOccupation>;
  jobCategory?: Collection<IJobCategory>;
}

@Entity({ tableName: 'user' })
export class User {
  @PrimaryKey()
  readonly id!: number;

  @Property()
  name!: string;

  @Property({ hidden: true })
  password!: string;

  @Property({ unique: true })
  email!: string;

  @ManyToMany(() => JobOccupation)
  jobOccupation? = new Collection<IJobOccupation>(this);

  @ManyToMany(() => JobCategory)
  jobCategory? = new Collection<IJobCategory>(this);

  constructor(
    name: string,
    password: string,
    email: string,
    jobOccupation?: IJobOccupation[],
    occupationZone?: IJobCategory[],
  ) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.jobOccupation = new Collection<IJobOccupation>(this, jobOccupation);
    this.jobCategory = new Collection<IJobCategory>(this, occupationZone);
  }
}
