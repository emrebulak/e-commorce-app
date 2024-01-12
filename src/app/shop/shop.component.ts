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
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Store } from '@ngrx/store';
import { increment } from '../reducers/basket.actions';


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
    private productService: ProductService,
    private categoryService: CategoryService) {

  }


  ngOnInit() {

    console.log(this.productRepository.getProducts());

  }

  get products(): Product[] {
    return this.productRepository.getProducts(this.selectedCategory);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }


  productDetail() {
    console.log("product detail");

  }

  addBasket(e: any) {
    console.log("add basket");
    // this.basketList.push("add basket");
    this.store.dispatch(increment());
    e.stopPropagation();

  }

}
