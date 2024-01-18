import { OrderRepository } from './../../../model/Order.repository';
import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { Cart, CartItem } from '../../../model/Cart';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Order } from '../../../model/Order';
import { Store } from '@ngrx/store';
import { reset } from '../../../reducers/basket.actions';
import { ToastService } from '../../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, HeroComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  heroTitle: string = 'Checkout';
  private store = inject(Store);

  constructor(public order: Order, private cart: Cart, private orderRepository: OrderRepository, private toast: ToastService, private router: Router) { }

  checkoutForm: any = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
  });

  clearForm() {
    this.checkoutForm.reset();
  }

  createOrder() {

    if (this.checkoutForm.valid) {
      this.orderRepository.saveOrder(this.order).subscribe((res: any) => {
        this.orderRepository.getOrderList();
        this.order.clearOrder();
        this.clearForm();
        this.store.dispatch(reset());
        this.toast.trigger('success', 'Order created successfully');
        this.router.navigate(['/ordercompleted']);
      });
    }
  }

  get cartList(): CartItem[] {
    return this.cart.items!;
  }

  get total(): number {
    return this.cart.total;
  }

}
