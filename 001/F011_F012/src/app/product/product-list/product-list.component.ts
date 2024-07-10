import { Component, Input, inject } from '@angular/core';
import { Product } from '../../product-category/models/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input({required: true, alias: 'products'})
  products : Product[] = [];

  productService = inject(ProductService);
  router = inject(Router); // forgalomiránytás szolgáltatása

  deleteProduct(p: Product){
    console.log(p);
    this.productService.deleteProduct(p).subscribe({
      next: (success) => {
        console.log(success);
        if(success) this.router.navigate(['/categories']); // url hívás kezdeményezek !
      }
    })
  }
}
