import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.apiEndpoint + 'categories');
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(environment.apiEndpoint + 'categories', category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.authService.token}>`
      }),
    });
  }

  deleteCategory(category: Category): Observable<Category> {
    return this.http.delete<Category>(environment.apiEndpoint + 'categories/' + category.id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.authService.token}>`
      }),
    });
  }
}
