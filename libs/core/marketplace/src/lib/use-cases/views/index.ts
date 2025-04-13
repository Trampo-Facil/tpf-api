import { Provider } from '@nestjs/common';
import { GetCitiesByState } from './get-cities-by-state';
import { GetStates } from './get-states';

export const views: Provider[] = [GetCitiesByState, GetStates];
