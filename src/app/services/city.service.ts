import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { environment } from '../../environment';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class CityService extends GenericService<City> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, `${environment.apiUri}/${environment.cityUri}`);
  }
}
