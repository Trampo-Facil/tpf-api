import { Injectable } from '@nestjs/common';
import { ICityRepository } from '../../data-access/repositories';

export interface IGetCitiesResponseDto {
  id: number;
  name: string;
  state: string;
}

@Injectable()
export class GetCities {
  constructor(private readonly cityRepository: ICityRepository) {}

  async get(): Promise<IGetCitiesResponseDto[]> {
    const cities = await this.cityRepository.getAllCities();
    return cities;
  }
}
