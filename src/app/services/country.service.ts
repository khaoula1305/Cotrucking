import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { GenericService } from './generic.service';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends GenericService<Country> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, `${environment.apiUri}/${environment.countryUri}`);
  }
}
