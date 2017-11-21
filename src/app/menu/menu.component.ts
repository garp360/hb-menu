import { Component, Input, ViewChild } from '@angular/core';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'conops-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() items: MenuItem[];
  @ViewChild('subMenu') public subMenu;

  constructor() { }

  open(url: string) {
    window.open(url, '_blank');
  }

}
