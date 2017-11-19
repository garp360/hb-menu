import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'conops-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[];
  @ViewChild('subMenu') public subMenu;

  constructor() { }

  open(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {
  }

}
