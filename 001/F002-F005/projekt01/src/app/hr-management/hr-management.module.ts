import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PhoneBookModule } from '../phone-book/phone-book.module';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    PhoneBookModule
  ],
  exports: [EmployeeListComponent]
})
export class HrManagementModule { }
