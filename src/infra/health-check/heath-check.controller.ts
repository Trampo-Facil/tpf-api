import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  check() {
    return { status: 'ok', env: this.configService.get('env') };
  }
}
