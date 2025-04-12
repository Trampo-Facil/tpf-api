import { Injectable } from '@nestjs/common';

export interface IGetCitiesResponseDto {
  id: number;
  name: string;
  state: string;
}

@Injectable()
export class GetCities {
  constructor() {}

  async get(): Promise<IGetCitiesResponseDto[]> {
    return [
      {
        id: 1,
        name: 'City A',
        state: 'State A',
      },
      {
        id: 2,
        name: 'City B',
        state: 'State B',
      },
    ];
    // const cities = await this.cityRepository.getAllCities();
    // return cities;
  }
}
