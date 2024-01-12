import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { Product } from '../../model/Product';
import { ProductRepository } from '../../model/Product.repository';
import { CommonModule } from '@angular/common';
import { Cart } from '../../model/Cart';
import { Store } from '@ngrx/store';
import { increment } from '../../reducers/basket.actions';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  id: number = 0;
  heroTitle: string = "Detail";
  private store = inject(Store);

  constructor(private _activatedRoute: ActivatedRoute, private productRepository: ProductRepository, private cart: Cart, private toast: ToastService) {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

  }

  ngOnInit() {

  }

  get product(): Product | null{
    return this.productRepository.getProductById(this.id)!;
  }

  addBasket(e: any, product: Product) {
    if (!this.cart.items.map(i => i.product.id).includes(product.id)) {
      this.store.dispatch(increment());
    }
    this.cart.addItem(product);
    this.toast.trigger("success", "Product added"); 
    console.log(this.cart.items);
    
    e.stopPropagation();
  }

}
