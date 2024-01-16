import { OrderService } from './../services/order.service';
import { Order } from './Order';
import { Injectable, OnInit } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderRepository{

    private orders: Order[] = [];

    constructor(private orderService: OrderService) {
        this.getOrderList();
    }

    getOrderList() {
        this.orderService.getOrders().subscribe(
            (order) => this.orders = order
        );
    }

    getOrders(): Order[] {
        // this.getOrderList();
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.orderService.saveOrder(order);
    }

    // clearOrder(){
    //     this.orders = [];
    // }
}
