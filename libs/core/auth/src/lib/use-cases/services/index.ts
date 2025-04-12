import { Provider } from '@nestjs/common';
import { RegisterWorker, IRegisterWorker } from './register-worker';

export const services: Provider[] = [
  { useClass: RegisterWorker, provide: IRegisterWorker },
];
