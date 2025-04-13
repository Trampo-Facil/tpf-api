import { Provider } from '@nestjs/common';
import { GetCitiesByState } from './get-cities-by-state';
import { GetStates } from './get-states';
import { GetJobCategories } from './get-job-categories';
import { GetJobOccupationsByCategory } from './get-job-occupations-by-category';

export const views: Provider[] = [
  GetCitiesByState,
  GetStates,
  GetJobCategories,
  GetJobOccupationsByCategory,
];
