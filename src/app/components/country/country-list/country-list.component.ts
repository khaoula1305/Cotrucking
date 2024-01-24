import { Component } from '@angular/core';
import { Country } from '../../../models/country';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.countryService.getAll().subscribe((data) => {
      this.countries = data;
    });
  }
}
