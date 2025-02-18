export class City {
  readonly id: number;
  readonly name: string;
  readonly state: string;

  constructor(id: number, name: string, state: string) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
}
