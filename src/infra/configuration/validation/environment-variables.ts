import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { EEnvironment } from 'src/common/enums';

abstract class IEnvironmentVariables {
  @IsEnum(EEnvironment)
  @IsNotEmpty()
  NODE_ENV!: EEnvironment;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  PORT!: number;

  @IsString()
  @IsNotEmpty()
  DB_HOST!: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  DB_PORT!: number;

  @IsString()
  @IsNotEmpty()
  DB_DATABASE!: string;

  @IsString()
  @IsNotEmpty()
  DB_USER!: string;

  @IsString()
  @IsNotEmpty()
  DB_PASSWORD!: string;

  @IsString()
  @IsNotEmpty()
  DB_NAME!: string;

  @IsString()
  @IsNotEmpty()
  DB_ROOT_PASSWORD!: string;
}

export class EnvironmentVariables extends IEnvironmentVariables {}
