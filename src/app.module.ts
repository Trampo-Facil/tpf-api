import { Module } from '@nestjs/common';
import {
  ConfigurationModule,
  DatabaseModule,
  HealthCheckController,
} from './infra';

@Module({
  imports: [ConfigurationModule.register(), DatabaseModule.register()],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}
