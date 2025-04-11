import { Module } from '@nestjs/common';
import {
  AppController,
  ConfigurationModule,
  DatabaseHealthCheck,
  DatabaseModule,
} from '.';
import { TerminusModule } from '@nestjs/terminus';
import { CoreAuthModule } from 'src/core/auth/core-auth.module';
import { CoreMarketplaceModule } from 'src/core/marketplace/core-marketplace.module';
import { CoreAnalyticsModule } from 'src/core/analytics/core-analytics.module';

@Module({
  imports: [
    ConfigurationModule.register(),
    DatabaseModule.register(),
    TerminusModule,
    CoreAuthModule,
    CoreMarketplaceModule,
    CoreAnalyticsModule,
  ],
  controllers: [AppController],
  providers: [DatabaseHealthCheck],
})
export class AppModule {}
