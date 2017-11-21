import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { Observable } from 'rxjs/Observable';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'conops-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  version: 'V2.0.0';
  title = 'app';
  menuItems: MenuItem[];

  constructor( private menuService:MenuService ) { }

  ngOnInit() {
    this.menuService.load().subscribe(res => {
      console.log(res);
      this.menuItems = res;
    });
  }
}
