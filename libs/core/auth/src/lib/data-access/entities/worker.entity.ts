import {
  Collection,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryKey,
} from '@mikro-orm/core';
import {
  City,
  ICity,
  IJobCategory,
  IJobOccupation,
  JobCategory,
  JobOccupation,
} from '@tpf/common';
import { IUser, User } from './user.entity';

export interface ICreateWorkerEntityDTO {
  user: IUser;
  jobOccupations?: IJobOccupation[];
  jobCategories?: IJobCategory[];
  operationCities?: ICity[];
}

export abstract class IWorker {
  id!: number;
  user?: IUser;
  jobOccupations: Collection<IJobOccupation>;
  jobCategories: Collection<IJobCategory>;
  operationCities: Collection<City>;
}

@Entity({ tableName: 'worker' })
export class Worker implements IWorker {
  @PrimaryKey()
  readonly id!: number;

  @OneToOne(() => User, { joinColumn: 'user_id' })
  user!: IUser;

  @ManyToMany(() => JobOccupation, undefined, {
    pivotTable: 'worker_job_occupations',
    joinColumn: 'worker_id',
    inverseJoinColumn: 'job_occupation_id',
  })
  jobOccupations = new Collection<IJobOccupation>(this);

  @ManyToMany(() => JobCategory, undefined, {
    pivotTable: 'worker_job_categories',
    joinColumn: 'worker_id',
    inverseJoinColumn: 'job_category_id',
  })
  jobCategories = new Collection<IJobCategory>(this);

  @ManyToMany(() => City, undefined, {
    pivotTable: 'worker_operation_cities',
    joinColumn: 'worker_id',
    inverseJoinColumn: 'city_id',
  })
  operationCities = new Collection<ICity>(this);

  constructor(props: ICreateWorkerEntityDTO) {
    const { user, jobOccupations, jobCategories, operationCities } = props;
    this.user = user;
    this.jobOccupations = new Collection<IJobOccupation>(this, jobOccupations);
    this.jobCategories = new Collection<IJobCategory>(this, jobCategories);
    this.operationCities = new Collection<ICity>(this, operationCities);
  }

  static create(props: ICreateWorkerEntityDTO): Worker {
    return new Worker(props);
  }
}
