import { Routes } from '@angular/router';
import { ShipmentEditComponent } from './components/shipment/shipment-edit/shipment-edit.component';
import { PageConstant } from './common/PageConstant';
import { FunctionalityConstant } from './common/FunctionalityConstant';
import { ShipmentListComponent } from './components/shipment/shipment-list/shipment-list.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CityEditComponent } from './components/city/city-edit/city-edit.component';
import { CountryEditComponent } from './components/country/country-edit/country-edit.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { CountryListComponent } from './components/country/country-list/country-list.component';

export const routes: Routes = [
    {
        path: 'shipment-edit/:id/edit',
        component: ShipmentEditComponent,
        data: { screenName: PageConstant.Shipment, action: FunctionalityConstant.UPDATE },
        canActivate: [AuthGuard],
      },
      {
        path: 'shipment-edit/:id',
        component: ShipmentEditComponent,
        data: { screenName: PageConstant.Shipment, action: FunctionalityConstant.READ },
        canActivate: [AuthGuard],
      },
      {
        path: 'shipment-list',
        component: ShipmentListComponent,
        data: { screenName: PageConstant.Shipment, action: FunctionalityConstant.READ },
        canActivate: [AuthGuard],
      },
      {
        path: 'country-edit/:id/edit',
        component: CountryEditComponent,
        data: { screenName: PageConstant.Country, action: FunctionalityConstant.UPDATE },
        canActivate: [AuthGuard],
      },
      {
        path: 'country-edit/:id',
        component: CountryEditComponent,
        data: { screenName: PageConstant.Country, action: FunctionalityConstant.READ },
        canActivate: [AuthGuard],
      },
      {
        path: 'country-list',
        component: CountryListComponent,
        data: { screenName: PageConstant.Country, action: FunctionalityConstant.READ },
        canActivate: [AuthGuard],
      },
      {
        path: 'city-edit/:id/edit',
        component: CityEditComponent,
        data: { screenName: PageConstant.City, action: FunctionalityConstant.UPDATE },
        canActivate: [AuthGuard],
      },
      {
        path: 'city-edit/:id',
        component: CityEditComponent,
        data: { screenName: PageConstant.City, action: FunctionalityConstant.READ },
        canActivate: [AuthGuard],
      },
      {
        path: 'city-list',
        component: CityListComponent,
        data: { screenName: PageConstant.City, action: FunctionalityConstant.READ },
        canActivate: [AuthGuard],
      },
      
];
