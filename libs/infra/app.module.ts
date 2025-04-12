import { Module } from '@nestjs/common';
import {
  AppController,
  ConfigurationModule,
  DatabaseHealthCheck,
  DatabaseModule,
} from '.';
import { TerminusModule } from '@nestjs/terminus';
import { CoreMarketplaceModule } from 'libs/core/marketplace/core-marketplace.module';
import { CoreAnalyticsModule } from 'libs/core/analytics/core-analytics.module';
import { CoreCommonModule } from '@tpf/common';
import { CoreAuthModule } from '@tpf/auth';

@Module({
  imports: [
    ConfigurationModule.register(),
    DatabaseModule.register(),
    TerminusModule,
    CoreCommonModule,
    CoreAuthModule,
    CoreMarketplaceModule,
    CoreAnalyticsModule,
  ],
  controllers: [AppController],
  providers: [DatabaseHealthCheck],
})
export class AppModule {}
