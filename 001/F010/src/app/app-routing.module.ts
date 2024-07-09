import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp/emp-list/emp-list.component';
import { EmpAddComponent } from './emp/emp-add/emp-add.component';
import { EmpUpdateComponent } from './emp/emp-update/emp-update.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  // 1. az app tölti be közvetlenül a modulból a különbőző nézeteket
  /*{
    path: 'emp',
    children: [ // a pathon belül belső útvonalakat tudok megállapítani
      {path: '', pathMatch: 'full', component: EmpListComponent},
      {path: 'add', component: EmpAddComponent},
      {path: 'update', component: EmpUpdateComponent}
    ]
  },*/
  // 2. odáig visszük el az útvonalkezelést, hogy az emp
  // modulra tartozik és következő lépésként az emp modul
  // belső útonvalkezelése oldja meg az alábontást
  {
    path: 'emp',
    // az első illeszkedésnél az import betölti a modult, és utána behelyettesítem a fájlban szereplő EmpModule definíciót
    loadChildren: () => import('./emp/emp.module').then(e => e.EmpModule)
  },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
