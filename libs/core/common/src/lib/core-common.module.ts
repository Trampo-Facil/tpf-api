import { Module, Provider } from '@nestjs/common';
import { City, JobCategory, JobOccupation } from './data-access';
import { MikroOrmModule } from '@mikro-orm/nestjs';

const entities = [City, JobCategory, JobOccupation];
const repositories: Provider[] = [];

@Module({
  imports: [MikroOrmModule.forFeature(entities)],
  providers: [],
  exports: [...repositories],
})
export class CoreCommonModule {}
