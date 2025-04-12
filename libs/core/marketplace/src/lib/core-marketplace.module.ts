import { Module } from '@nestjs/common';
import { services } from './use-cases/services';
import { views } from './use-cases/views';
import { repositories } from './data-access';
import { providers } from './provider';
import { controllers } from './presenter';

@Module({
  imports: [],
  controllers: [...controllers],
  providers: [...repositories, ...views, ...services, ...providers],
})
export class CoreMarketplaceModule {}
