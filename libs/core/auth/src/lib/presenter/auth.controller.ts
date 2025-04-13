import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterWorkerDTO } from './dtos';
import { IRegisterWorker } from '../use-cases/services/register-worker';
import { ILogin } from '../use-cases/services/login';
import { LoginDTO } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerWorkerUseCase: IRegisterWorker,
    private readonly loginUseCase: ILogin,
  ) {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: LoginDTO) {
    return this.loginUseCase.execute(body);
  }

  @Post('worker/sign-up')
  workerSignUp(@Body() body: RegisterWorkerDTO) {
    return this.registerWorkerUseCase.execute(body);
  }
}
