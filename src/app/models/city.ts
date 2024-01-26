import { BaseModel } from './base-model';
import { Country } from './country';

export class City extends BaseModel {
  label?: string;
  code?: string;
  name?: string;
  country: Country = new Country();
}
