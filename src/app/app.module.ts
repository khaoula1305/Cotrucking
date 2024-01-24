import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountryListComponent,
    AppRoutingModule
  ]
})
export class AppModule { }
