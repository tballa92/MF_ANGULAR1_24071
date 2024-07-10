import { Component, OnInit, inject } from '@angular/core';
import { ProductCategoryService } from '../product-category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  // az injektálás vagy konstruktoron vagy
  // az injekt segítségével történhet
  private pcService2 = inject(ProductCategoryService)

  constructor(private pcService : ProductCategoryService){
    // az injektálás eredménye már a konstruktoban is elérhető
    //console.log(this.pcService);
    //console.log(this.pcService2);
  }

  // v1) feliratkozom a szolgáltatásra és az adatokat lokális változóba helyezem
  data : Category[] = [];
  dataLoad : boolean = false; // jelzi, ha folyamatban van a letöltés
  ngOnInit(): void { // eldintíom az adatlekérést a logikai inicializálásban
    this.dataLoad = true;
    this.pcService.getCategories().subscribe({
      next: (data) => {
        this.data = data;
        this.dataLoad = false;
      },
      error: (error) => {
        this.dataLoad = false;
      }
    })
  }
}
