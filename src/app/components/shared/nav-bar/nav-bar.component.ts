import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Parameter',
        icon: 'pi pi-fw pi-star',
        items: [
          {
            label: 'City',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/city-list'],
          },
          {
            label: 'Country',
            icon: 'pi pi-fw pi-external-link',
            routerLink: ['/country-list'],
          },
          // More subitems if needed
        ],
      },
      // More items if needed
    ];
  }
}
