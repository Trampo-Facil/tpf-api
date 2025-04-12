import { Body, Controller, Post } from '@nestjs/common';
import { RegisterWorkerDTO } from './dtos';
import { IRegisterWorker } from '../use-cases/services/register-worker';

@Controller('auth')
export class AuthController {
  constructor(private readonly registerWorkerUseCase: IRegisterWorker) {}

  @Post('worker/register')
  registerWorker(@Body() body: RegisterWorkerDTO) {
    return this.registerWorkerUseCase.execute(body);
  }
}
