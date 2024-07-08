import { Component } from '@angular/core';
import { Employee } from '../../phone-book/models/Employee';
import { Sex } from '../../phone-book/models/Sex';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  emps : Employee[];

  constructor(){
    this.emps = [];

    let e1 = new Employee('S1', new Date(1990,0,1), Sex.MALE, '04453167x', 's1@gmail.com');
    let e2 = new Employee('S2', new Date(1989,10,1), Sex.FEMALE, '045', 's2@gmail.com');

    this.emps.push(e1, e2);
  }
}
