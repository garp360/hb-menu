import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item';

@Injectable()
export class MenuService {
  menu: Observable<MenuItem[]>;
  constructor(public db: AngularFireDatabase) {
    this.menu = db.list<MenuItem>('menu').valueChanges();
  }

  load() {
    return this.menu;
  }

}
