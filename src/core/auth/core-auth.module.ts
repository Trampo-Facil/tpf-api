import { Module } from '@nestjs/common';
import { controllers } from './presenter';

@Module({
  providers: [],
  controllers: [...controllers],
})
export class CoreAuthModule {}
