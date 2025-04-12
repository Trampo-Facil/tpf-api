import { Module } from '@nestjs/common';
import { controllers } from './presenter';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './data-access/entities';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [],
  controllers: [...controllers],
})
export class CoreAuthModule {}
