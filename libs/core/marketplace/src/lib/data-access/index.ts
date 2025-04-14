import { Provider } from '@nestjs/common';
import { User, Worker } from './entities';
import {
  IWorkerRepository,
  WorkerRepository,
} from './repositories/worker.repository';

export const repositories: Provider[] = [
  {
    provide: IWorkerRepository,
    useClass: WorkerRepository,
  },
];

export const entities = [User, Worker];
