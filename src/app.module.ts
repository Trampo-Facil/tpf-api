import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule, DatabaseModule } from './infra';

@Module({
  imports: [ConfigurationModule.register(), DatabaseModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
