export class User {
  readonly id: number;
  name: string;
  password: string;
  email: string;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}
