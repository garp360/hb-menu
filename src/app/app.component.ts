import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { Observable } from 'rxjs/Observable';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'conops-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  version: 'V2.0.0';
  title = 'app';
  menuItems: MenuItem[];

  constructor( private menuService:MenuService ) {

  }

  ngOnInit() {
    this.menuService.load().subscribe(res => {
      console.log(res);
      this.menuItems = res;
    });
  }

  // menuItems: MenuItem[] =
  // [
  //   {
  //     text: 'home',
  //     children:
  //     [
  //       {
  //         text: 'Engineering',
  //         children:
  //         [
  //           {
  //             text: 'ENG-16'
  //           },
  //           {
  //             text: 'Route Builder',
  //             url: 'https://www.google.com'
  //           }
  //         ]
  //       },
  //       {
  //         text: 'Inventory',
  //         children:
  //         [
  //           {
  //             text: 'INV-16'
  //           },
  //           {
  //             text: 'PSA'
  //           }
  //         ]
  //       },
  //       {
  //         text: 'Administration',
  //         children:
  //         [
  //           {
  //             text: 'CONOPS',
  //             children:
  //             [
  //               {
  //                 text: 'Groups'
  //               },
  //               {
  //                 text: 'Users',
  //                 url: 'http://www.msn.com',
  //                 children:
  //                 [
  //                   {
  //                     text: 'Unlock',
  //                     url: 'http://www.yahoo.com',
  //                   },
  //                   {
  //                     text: 'Add',
  //                     url: 'http://www.aol.com',
  //                   }
  //                 ]
  //               },
  //               {
  //                 text: 'Permissions'
  //               }
  //             ]
  //           },
  //           {
  //             text: 'MRO'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];
}
