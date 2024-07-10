import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
// szogláltatás, mivel injektálható a DI-n keresztül
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http : HttpClient) {}

  getCategories() : Observable<Category[]>{
    const URL = 'https://dummyjson.com/products/categories/?delay=5000';

    return this.http.get<Category[]>(URL);  // elvárom, hogy Category[] legyen az eredmény
  }

  // getProducts függvény, amely a paraméterben
  // megkapott slug alapján lekéri a termékek
  // listáját
  getProducts(slug : string) : Observable<Product[]>{
    const URL = 'https://dummyjson.com/products/category/' + slug;

    return this.http.get<any>(URL) // get-es kérés eredménye any -> ez lesz a pipe bemenete
               .pipe<Product[]>( // a pipeon belül tetszőleges láncolat építhető a filter és map segítségével
                  map((apiData) => {
                     let output : Product[] = []; // ez lesz a kimenet

                     let apiProducts = apiData.products; // tömb
                     for(let p of apiProducts){
                        let newProduct : Product = {
                          id: p.id,
                          title: p.title,
                          price: p.price
                        }

                        output.push(newProduct);
                     }

                     return output;
                  })
               );
  }
}
