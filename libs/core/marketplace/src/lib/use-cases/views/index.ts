import { Provider } from '@nestjs/common';
import { GetCities } from './get-cities';

export const views: Provider[] = [GetCities];
