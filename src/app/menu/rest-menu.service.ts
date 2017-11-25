import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MenuItem } from '../menu-item';

@Injectable()
export class RestMenuService {
  menu: Observable<MenuItem[]>;
  constructor(private http: Http) {
    this.menu = this.http.get("http://localhost:8080/CONOPS/api/menu/")
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

  getMenu() {
      return this.menu;
   }
}
