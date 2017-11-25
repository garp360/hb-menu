import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { Observable } from 'rxjs/Observable';
import { MenuService } from './menu/menu.service';
import { RestMenuService } from './menu/rest-menu.service';

@Component({
  selector: 'conops-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  version: 'V2.0.0';
  title = 'app';
  menuItems: MenuItem[];

  constructor( private menuService:RestMenuService ) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe(p=>this.menuItems = p);
    // this.menuService.load().subscribe(res => {
    //   console.log(res);
    //   this.menuItems = res;
    // });
  }
}
