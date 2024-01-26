import { Component, Input } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { City } from '../../../models/city';
import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-city-edit',
  standalone: false,
  templateUrl: './city-edit.component.html',
  styleUrl: './city-edit.component.scss',
})
export class CityEditComponent {
  city: City = new City();
  submitted: boolean = false;
  @Input() id?: string;
  constructor(
    private cityService: CityService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnInit(): void {
    if (this.id)
      this.cityService.getById(this.id).subscribe((data) => {
        this.city = data;
      });
  }
}
