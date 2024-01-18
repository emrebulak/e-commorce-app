import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/Order';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.apiEndpoint + 'orders');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.apiEndpoint + 'orders', order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(environment.apiEndpoint + 'orders/' + order.id, order);
  }
}
