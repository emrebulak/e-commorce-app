import { CategoryRepository } from './../model/Category.repository';
import { ProductRepository } from './../model/Product.repository';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { Store } from '@ngrx/store';
import { increment } from '../reducers/basket.actions';
import { Cart } from '../model/Cart';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent, HeroComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  private store = inject(Store);
  heroTitle: string = "Shop";
  public selectedCategory: number | null = null;

  constructor(private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart: Cart, private _router: Router) {}

  ngOnInit() {

    console.log(this.productRepository.getProducts());

  }

  get products(): Product[] {
    return this.productRepository.getProducts(this.selectedCategory);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }


  productDetail(id: number) {
    console.log("product detail");
    this._router.navigate(['/detail', id]);
  }

  addBasket(e: any, product: Product) {
    if (!this.cart.items.map(i => i.product.id).includes(product.id)) {
      this.store.dispatch(increment());
    }
    this.cart.addItem(product); 
    e.stopPropagation();
  }

}
