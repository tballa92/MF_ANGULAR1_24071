import { Component } from '@angular/core';
import { PhoneBook } from '../models/PhoneBook';
import { Employee } from '../models/Employee';
import { Sex } from '../models/Sex';

@Component({
  selector: 'app-business-card-list',
  templateUrl: './business-card-list.component.html',  // hivatkozhatom this nélkül az osztály publikus mezőit és metódusait
  styleUrl: './business-card-list.component.css'
})
export class BusinessCardListComponent {
  // Felveszek egy telefonkönyvet, amibe az adatokat majd mockolni fogjuk.
  phoneBook: PhoneBook<Employee>;// a telefonkönyben személyeket tudunk elhelyezni

  constructor(){ // DI lehet itt, de automatikusan példányosít, azaz ne fogadjunk paramétereket
    this.phoneBook = new PhoneBook();

    let e1 = new Employee('S1', new Date(1990,0,1), Sex.MALE, '044', 's1@gmail.com');
    e1.phones.push('+15');
    e1.phones.push('+42');

    let e2 = new Employee('S2', new Date(1989,10,1), Sex.FEMALE, '045', 's2@gmail.com');

    this.phoneBook.people.push(e1);
    this.phoneBook.people.push(e2);
  }
}
