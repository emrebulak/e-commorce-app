import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Cart, CartItem } from '../../model/Cart';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeroComponent, FontAwesomeModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  faXmark = faXmark;
  faPlus = faPlus;
  faMinus = faMinus;
  heroTitle: string = "Cart";

  constructor(private cart: Cart, private toast: ToastService) {
    console.log("Veriler : ", this.cart.items);
  }

  get cartList(): CartItem[] {
    return this.cart.items!;
  }

  get total(): number {
    return this.cart.total;
  }


}
