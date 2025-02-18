import { Provider } from '@nestjs/common';
import { City, Client, Job, Worker } from './entities';
import {
  ICityRepository,
  CityRepository,
  IClientRepository,
  ClientRepository,
  IJobRepository,
  JobRepository,
  IWorkerRepository,
  WorkerRepository,
} from './repositories';

export const repositories: Provider[] = [
  { provide: ICityRepository, useClass: CityRepository },
  { provide: IWorkerRepository, useClass: WorkerRepository },
  { provide: IClientRepository, useClass: ClientRepository },
  { provide: IJobRepository, useClass: JobRepository },
];

export const entities = [City, Worker, Client, Job];
