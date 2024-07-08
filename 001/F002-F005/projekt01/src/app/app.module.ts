import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { PhoneBookModule } from './phone-book/phone-book.module';
import { HrManagementModule } from './hr-management/hr-management.module';
import { TodoListModule } from './todo-list/todo-list.module';

// modul definíció
@NgModule({
  declarations: [ // azokat a definíciók,létrehozások, amelyek a modulhoz tartoznak
    AppComponent // , BusinessCardComponent -> nem lehet, mivel standalone
  ],
  imports: [ // felsorolom azokat a külső elemket, amiket imporátlni szeretnék a modul műkdöéséhez
    BrowserModule,
    AppRoutingModule,
    HrManagementModule,
    TodoListModule,
    BusinessCardComponent, // beimportálom a külső sc-t, hogy fel tudjam helyezni a modulon belül
    PhoneBookModule // szeretném használni a benne definiált komponens
  ],
  exports: [], // azok a saját definíciók, amiket kiajánlunk mások számára
  providers: [],
  bootstrap: [AppComponent] // mi legyen az indító komponens
})
export class AppModule { }
