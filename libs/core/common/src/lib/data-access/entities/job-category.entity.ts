import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export abstract class IJobCategory {
  id!: number;
  name!: string;
}

@Entity({ tableName: 'job_category', readonly: true })
export class JobCategory implements IJobCategory {
  @PrimaryKey()
  readonly id!: number;

  @Property()
  name!: string;
}
