import { OrderService } from './../services/order.service';
import { Order } from './Order';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderRepository {

    private orders: Order[] = [];

    constructor(private orderService: OrderService) { }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.orderService.saveOrder(order);
    }

    clearOrder(order:Order){
        this.orderService.clearOrder(order);
    }
}
