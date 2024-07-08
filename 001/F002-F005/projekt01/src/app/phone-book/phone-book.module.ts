import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sex } from './models/Sex';
import { Employee } from './models/Employee';
import { PhoneBook } from './models/PhoneBook';
import { IPerson } from './models/IPerson';
import { BusinessCardListComponent } from './business-card-list/business-card-list.component';
import { SexPipe } from './sex.pipe';



@NgModule({
  declarations: [ // csak "nevezetes" angular elemek szerpelhetenk (direktíva, komponens, pipe)
    BusinessCardListComponent, SexPipe
  ],
  imports: [
    CommonModule // gyakran használt elemek (pl. a ciklikus megjelenítés, feltételes megjelenítés)
  ],
  // szeretném,  hogy a BCL kívülről elérhető legyen
  exports: [BusinessCardListComponent, SexPipe]
})
export class PhoneBookModule { }
