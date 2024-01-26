import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../services/city.service';
import { City } from '../../../models/city';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AppModule } from '../../../app.module';

@Component({
  selector: 'app-city-list',
  standalone: false,
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss',
})
export class CityListComponent implements OnInit {
  cityDialog: boolean = false;

  cities: City[] = [];

  city: City = new City();

  selectedCities: City[] = [];

  submitted: boolean = false;
  constructor(
    private cityService: CityService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnInit(): void {
    this.cityService.getAll().subscribe((data) => {
      this.cities = data;
    });
  }

  openNew() {
    this.city = new City();
    this.submitted = false;
    this.cityDialog = true;
  }

  deleteSelectedCities() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected cities?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cities = this.cities.filter(
          (val) => !this.selectedCities.includes(val)
        );
        this.selectedCities = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cities Deleted',
          life: 3000,
        });
      },
    });
  }

  editCity(city: City) {
    this.city = { ...city };
    this.cityDialog = true;
  }

  deleteCity(city: City) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + city.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cities = this.cities.filter((val) => val.id !== city.id);
        this.city = new City();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'City Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.cityDialog = false;
    this.submitted = false;
  }

  saveCity() {
    this.submitted = true;

    if (this.city.name?.trim()) {
      if (this.city.id) {
        this.cities[this.findIndexById(this.city.id)] = this.city;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'City Updated',
          life: 3000,
        });
      } else {
        this.city.id = this.createId();
        this.cities.push(this.city);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'City Created',
          life: 3000,
        });
      }

      this.cities = [...this.cities];
      this.cityDialog = false;
      this.city = new City();
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
