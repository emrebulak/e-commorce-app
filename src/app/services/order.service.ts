import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/Order';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.apiEndpoint + 'orders', order);
  }

  clearOrder(order:Order){
    order.clearOrder();
  }
}
