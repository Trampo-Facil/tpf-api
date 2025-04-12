import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export abstract class AssociateCitiesIntoWorkerDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  workerId: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  @Type(() => Number)
  cityIds: number[];
}
