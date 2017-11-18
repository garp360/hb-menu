import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'conops-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  version: 'V2.0.0';
  title = 'app';

  menuItems: MenuItem[] = [
    {
      text: 'home',
      children: [
        {
          text: 'Engineering',
          children: [
            {
              text: 'ENG-16'
            },
            {
              text: 'Route Builder'
            }
          ]
        },
        {
          text: 'Inventory',
          children: [
            {
              text: 'INV-16'
            },
            {
              text: 'PSA'
            }
          ]
        }
    }
  ];
}
