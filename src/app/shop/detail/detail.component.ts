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
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeroComponent, TranslateModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  id: number = 0;
  private store = inject(Store);

  constructor(private _activatedRoute: ActivatedRoute, private productRepository: ProductRepository, private cart: Cart, private toast: ToastService, private translate:TranslateService) {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

  }

  get product(): Product | null{
    return this.productRepository.getProductById(this.id)!;
  }

  addBasket(e: any, product: Product) {
    if (!this.cart.items.map(i => i.product.id).includes(product.id)) {
      this.store.dispatch(increment());
    }
    this.cart.addItem(product);
    this.toast.trigger("success", this.translate.instant('Shop.ProductAdded')); 
    console.log(this.cart.items);
    
    e.stopPropagation();
  }

}
