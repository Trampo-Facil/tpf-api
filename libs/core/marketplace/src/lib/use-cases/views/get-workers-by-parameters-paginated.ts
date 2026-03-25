import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IGetWorkerByParametersPaginatedDTO } from '../../presenter/dtos';
import { IWorkerRepository } from '../../data-access/repositories';
import { IPaginationResponseDTO, PaginationResponseDTO } from '@tpf/common';
import { IWorker } from '@tpf/domain';

export class IGetWorkersByParametersResponseDTO {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  user!: { id: number; name: string; email: string; phone: string };

  @ApiProperty()
  operationCities!: { id: number; name: string }[];

  @ApiProperty()
  jobOccupations!: { id: number; name: string }[];

  constructor(worker: IWorker) {
    this.id = worker.id;
    this.user = {
      id: worker.user.id,
      name: worker.user.name,
      email: worker.user.email,
      phone: worker.user.phone,
    };
    this.operationCities = worker.operationCities.map((city) => ({
      id: city.id,
      name: city.name,
    }));
    this.jobOccupations = worker.jobOccupations.map((occ) => ({
      id: occ.id,
      name: occ.name,
    }));
  }
}

export class IGetWorkersByParametersPaginatedResponseDTO extends PaginationResponseDTO<IGetWorkersByParametersResponseDTO> {
  @ApiProperty({
    type: IGetWorkersByParametersResponseDTO,
    isArray: true,
  })
  override data!: IGetWorkersByParametersResponseDTO[];
}

@Injectable()
export class GetWorkersByParametersPaginated {
  constructor(private readonly workerRepository: IWorkerRepository) {}

  async get(
    dto: IGetWorkerByParametersPaginatedDTO,
  ): Promise<
    IPaginationResponseDTO<IGetWorkersByParametersResponseDTO> | HttpException
  > {
    const { page, limit, ...parameters } = dto;

    const [workers, count] =
      await this.workerRepository.getWorkersByParametersPaginated(
        {
          ...parameters,
          page,
          limit,
        },
        [
          'user',
          'operationCities',
          'jobOccupations',
          'jobOccupations.category',
        ],
      );

    if (!workers.length) {
      return new NotFoundException(
        `Nenhum trabalhador encontrado com os parâmetros fornecidos`,
      );
    }

    const data = workers.map(
      (worker) => new IGetWorkersByParametersResponseDTO(worker),
    );

    return new PaginationResponseDTO<IGetWorkersByParametersResponseDTO>({
      data,
      pages: Math.ceil(count / limit),
      total: count,
    });
  }
}
