import { Provider } from '@nestjs/common';
import { User, Worker } from './entities';
import { IUserRepository, UserRepository } from './repositories';
import {
  IWorkerRepository,
  WorkerRepository,
} from './repositories/worker.repository';

export const repositories: Provider[] = [
  {
    provide: IUserRepository,
    useClass: UserRepository,
  },
  {
    provide: IWorkerRepository,
    useClass: WorkerRepository,
  },
];

export const entities = [User, Worker];
