import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { EStatesCode, ICityRepository } from '@tpf/common';

export class IGetCitiesByStateResponseDTO {
  @ApiProperty()
  id!: number;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  state!: string;
}
@Injectable()
export class GetCitiesByState {
  constructor(private readonly cityRepository: ICityRepository) {}

  async get(stateId: EStatesCode): Promise<IGetCitiesByStateResponseDTO[]> {
    const cities = await this.cityRepository.getByStateId(stateId);
    if (!cities) {
      return [];
    }
    return cities.map((city) => ({
      id: city.id,
      name: city.name,
      state: city.state,
    }));
  }
}
