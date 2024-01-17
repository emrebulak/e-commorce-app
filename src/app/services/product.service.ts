import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiEndpoint + 'products');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiEndpoint + 'products', product, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.authService.token}>`
      }),
    });
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiEndpoint + 'products/' + product.id, product, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.authService.token}>`
      }),
    });
  }
}
