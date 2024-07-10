import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';
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
}
