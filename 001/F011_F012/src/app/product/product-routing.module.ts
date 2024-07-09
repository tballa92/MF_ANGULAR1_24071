import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent},
  { path: 'add', component: ProductAddComponent},
  { path: 'update', component: ProductUpdateComponent},
  { path: 'show', component: ProductComponent},
  { path: '', pathMatch: 'full', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
