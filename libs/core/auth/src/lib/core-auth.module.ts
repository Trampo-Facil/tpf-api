import { Module } from '@nestjs/common';
import { controllers } from './presenter';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CoreCommonModule } from '@tpf/common';
import { services } from './use-cases/services';
import { entities, repositories } from './data-access';

@Module({
  imports: [MikroOrmModule.forFeature(entities), CoreCommonModule],
  providers: [...services, ...repositories],
  controllers: [...controllers],
})
export class CoreAuthModule {}
