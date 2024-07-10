import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product-category/models/product.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  deleteProduct(p : Product) : Observable<boolean>{
    const URL = `https://dummyjson.com/products/${p.id}`;

    return this.http.delete<any>(URL)
      .pipe<boolean>(
        map<any,boolean>((apiData) =>  apiData.isDeleted)
      );
  }
}
