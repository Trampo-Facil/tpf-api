import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export abstract class ICity {
  abstract id: number;
  abstract name: string;
  abstract state: string;
  abstract country: string;
  abstract enabled: boolean;
  abstract ibgeId: number;
}

@Entity({ tableName: 'city', readonly: true })
export class City implements ICity {
  @PrimaryKey()
  readonly id!: number;

  @Property()
  name!: string;

  @Property()
  state!: string;

  @Property()
  country!: string;

  @Property()
  enabled!: boolean;

  @Property()
  ibgeId!: number;
}
