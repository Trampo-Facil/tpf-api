import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetCities } from '../use-cases/views/get-cities';
import { AssociateCitiesIntoWorkerDto } from './dtos';
import { IAssociateCitiesIntoWorker } from '../use-cases/services/associate-cities-into-worker';

@Controller('cities')
export class CityController {
  constructor(
    private readonly getCitiesView: GetCities,
    private readonly associateCitiesIntoWorkerUseCase: IAssociateCitiesIntoWorker,
  ) {}

  @Get()
  getCities() {
    return this.getCitiesView.get();
  }

  @Post('associate/worker')
  associateCitiesIntoWorker(@Body() dto: AssociateCitiesIntoWorkerDto) {
    return this.associateCitiesIntoWorkerUseCase.execute(
      dto.workerId,
      dto.cityIds,
    );
  }
}
