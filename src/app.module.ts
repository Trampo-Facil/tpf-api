import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule, DatabaseModule } from './infra';

@Module({
  imports: [ConfigurationModule.register(), DatabaseModule.register()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
