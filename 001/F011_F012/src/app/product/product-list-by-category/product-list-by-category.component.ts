import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategoryService } from '../../product-category/product-category.service';
import { Product } from '../../product-category/models/product.model';

@Component({
  selector: 'app-product-list-by-category',
  templateUrl: './product-list-by-category.component.html',
  styleUrl: './product-list-by-category.component.css'
})
export class ProductListByCategoryComponent implements OnInit {

  // beillesztem a kiválasztott útvonalat, annak érdekében
  // hogy le tudjam kérdezni a paraméterekt belőle
  // a paramMap-re feliratkozom és kinyerem a :slug
  // nevű paraméter értéket
  activeSlug : string | null = null;
  constructor(private activedRoute : ActivatedRoute, private pcService : ProductCategoryService){
    activedRoute.paramMap.subscribe({
      next: (paramMap) => {
        // paramMap-ből a get metóduson keresztül
        // tudom kiolvasni az értékeket név alapján
        // (elhagyva a : )
        this.activeSlug = paramMap.get('slug');
      }
    })
  }

  data : Product[] = [];
  ngOnInit(): void {
    this.pcService.getProducts(this.activeSlug as string)
      .subscribe({
        next: (data) => { this.data = data; } // a nézet számára átadom az adatokat
      })
  }
}
