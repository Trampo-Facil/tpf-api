import { Controller, Get, Query } from '@nestjs/common';
import { GetWorkerByParametersPaginatedDTO } from './dtos';
import {
  GetWorkersByParametersPaginated,
  IGetWorkersByParametersPaginatedResponseDTO,
} from '../use-cases/views/get-workers-by-parameters-paginated';
import { ApiResponse } from '@nestjs/swagger';
import { PaginationResponseDTO } from '@tpf/common';

@Controller('worker')
export class WorkerController {
  constructor(
    private readonly GetWorkersByParametersPaginatedView: GetWorkersByParametersPaginated,
  ) {}

  @Get('paginated')
  @ApiResponse({
    status: 200,
    description: 'Get workers by parameters paginated',
    type: PaginationResponseDTO<IGetWorkersByParametersPaginatedResponseDTO>,
  })
  getWorkersByParametersPaginated(
    @Query() dto: GetWorkerByParametersPaginatedDTO,
  ) {
    return this.GetWorkersByParametersPaginatedView.get(dto);
  }
}
