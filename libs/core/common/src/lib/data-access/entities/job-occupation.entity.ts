import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export abstract class IJobOccupation {
  id!: number;
  name!: string;
}

@Entity({ tableName: 'job_occupation', readonly: true })
export class JobOccupation implements IJobOccupation {
  @PrimaryKey()
  readonly id!: number;

  @Property()
  name!: string;
}
