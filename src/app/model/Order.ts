import { Injectable, inject } from "@angular/core";
import { Cart } from "./Cart";

@Injectable({ providedIn: "root" })
export class Order {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public address!: string;
    public city!: string;
    public phone!: string;
    public email!: string;

    public isSent: boolean = false;

    constructor(public cart: Cart) {}

   clearOrder() {
        this.id = this.firstName = this.lastName = this.address = this.city = this.phone = this.email = null!;
        this.isSent = false;
        this.cart.clear();
    }

}
