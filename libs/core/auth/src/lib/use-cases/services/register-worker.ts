import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { IRegisterWorkerDTO } from '../../presenter/dtos';
import { IUserRepository } from '../../data-access/repositories';
import { IWorkerRepository } from '../../data-access/repositories/worker.repository';
import {
  ICityRepository,
  IJobCategoryRepository,
  IJobOccupationRepository,
} from '@tpf/common';
import { EntityManager } from '@mikro-orm/core';

export abstract class IRegisterWorker {
  abstract execute(dto: IRegisterWorkerDTO): Promise<void | HttpException>;
}

@Injectable()
export class RegisterWorker implements IRegisterWorker {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly workerRepository: IWorkerRepository,
    private readonly jobCategoryRepository: IJobCategoryRepository,
    private readonly jobOccupationRepository: IJobOccupationRepository,
    private readonly cityRepository: ICityRepository,
    private readonly em: EntityManager,
  ) {}

  async execute(dto: IRegisterWorkerDTO): Promise<void | HttpException> {
    const {
      email,
      password,
      name,
      jobCategoryIds,
      jobOccupationIds,
      operationCitiesIds,
    } = dto;

    const [jobCategories, jobOccupations, operationCities] = await Promise.all([
      this.jobCategoryRepository.getByIds(jobCategoryIds),
      this.jobOccupationRepository.getByIds(jobOccupationIds),
      this.cityRepository.getByIds(operationCitiesIds),
    ]);

    const errors = [];
    if (jobCategories.length !== jobCategoryIds.length)
      errors.push('Categorias de trabalho não encontradas');

    if (jobOccupations.length !== jobOccupationIds.length)
      errors.push('Profissões de trabalho não encontradas');

    if (operationCities.length !== operationCitiesIds.length)
      errors.push('Cidades de operação não encontradas');

    if (errors.length) return new NotFoundException(errors.join('; '));

    await this.em.transactional(async (em) => {
      const user = this.userRepository.create({
        email,
        password,
        name,
      });

      const worker = this.workerRepository.create({
        user,
        jobCategories,
        jobOccupations,
        operationCities,
      });

      user.setWorker(worker);

      em.persist([user, worker]);

      await em.flush();
    });
  }
}
