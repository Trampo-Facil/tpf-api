import { Provider } from '@nestjs/common';
import { User } from './entities';
import { IUserRepository, UserRepository } from './repositories';

export const repositories: Provider[] = [
  {
    provide: IUserRepository,
    useClass: UserRepository,
  },
];

export const entities = [User];
