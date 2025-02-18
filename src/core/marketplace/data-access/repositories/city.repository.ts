import { City } from '../entities';

export abstract class ICityRepository {
  abstract getAllCities(): Promise<City[]>;
}

export class CityRepository implements ICityRepository {
  getAllCities(): Promise<City[]> {
    return Promise.resolve(
      [
        new City(1, 'Uberlandia', 'MG'),
        new City(2, 'Uberaba', 'MG'),
        new City(3, 'Araguari', 'MG'),
      ].sort((a, b) => a.name.localeCompare(b.name)),
    );
  }
}
