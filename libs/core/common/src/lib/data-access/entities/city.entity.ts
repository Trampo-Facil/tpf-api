import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export abstract class ICity {
  id!: number;
  name!: string;
  state!: string;
  country!: string;
  enabled!: boolean;
  ibgeId!: number;
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
