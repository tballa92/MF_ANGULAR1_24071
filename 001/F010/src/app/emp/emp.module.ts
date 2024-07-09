import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpRoutingModule } from './emp-routing.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';


@NgModule({
  declarations: [
    EmpListComponent,
    EmpAddComponent,
    EmpUpdateComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule
  ]
})
export class EmpModule { }
