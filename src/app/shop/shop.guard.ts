import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Cart } from '../model/Cart';

@Injectable({
    providedIn: 'root'
})
export class ShopGuard implements CanActivate {

    constructor(private router: Router, private cart:Cart) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.cart.items.length > 0) {          
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }

}
