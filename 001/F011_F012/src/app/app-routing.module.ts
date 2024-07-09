import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./product/product.module').then(e => e.ProductModule)},
  { path: 'categories', loadChildren: () => import('./product-category/product-category.module').then(e => e.ProductCategoryModule)},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
