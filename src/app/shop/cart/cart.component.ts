import { Component, inject } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Cart, CartItem } from '../../model/Cart';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../model/Product';
import { Store } from '@ngrx/store';
import { decrement } from '../../reducers/basket.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeroComponent, FontAwesomeModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private store = inject(Store);
  faXmark = faXmark;
  faPlus = faPlus;
  faMinus = faMinus;
  heroTitle: string = "Cart";

  constructor(private cart: Cart, private toast: ToastService, private router: Router) {
  }

  get cartList(): CartItem[] {
    return this.cart.items!;
  }

  get total(): number {
    return this.cart.total;
  }

  removeItem(item: CartItem) {
    this.cart.removeItem(item.product.id);
    this.store.dispatch(decrement());
    this.toast.trigger('success', 'Item removed from cart');
  }

  decreaseItem(item: CartItem) {
    this.cart.updateQuantity(item.product, item.quantity - 1);
    this.toast.trigger('success', 'Item updated in cart');

  }

  increaseItem(item: CartItem) {
    this.cart.updateQuantity(item.product, item.quantity + 1);
    this.toast.trigger('success', 'Item updated in cart');

  }

  changeItem(e: any, item: CartItem) {
    if (e.target.value == '' || e.target.value < 1) {
      e.target.value = item.quantity;
    } else {
      this.cart.updateQuantity(item.product, Number(e.target.value));
    }
  }

  keyupItem(e: any, item: CartItem) {
    if (e.target.value != '' && e.target.value > 0) {
      this.cart.updateQuantity(item.product, Number(e.target.value));
    }
  }

  proceedToCheckout() {
    this.router.navigate( ['checkout']);
  }


}
