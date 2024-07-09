import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EmpListComponent},
  { path: 'add', component: EmpAddComponent},
  { path: 'update', component: EmpUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // belső forgalomirányításnál nem forRoot-tal, hanem forChild-al töltünk be
  exports: [RouterModule]
})
export class EmpRoutingModule { }
