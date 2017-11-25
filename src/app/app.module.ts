import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { RestMenuService } from './menu/rest-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
		MatCheckboxModule,
		MatMenuModule,
		MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  exports: [
    MatButtonModule,
		MatCheckboxModule,
		MatMenuModule,
		MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ MenuService, RestMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
