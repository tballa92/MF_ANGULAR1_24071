import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductListByCategoryComponent } from './product-list-by-category/product-list-by-category.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductListByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
