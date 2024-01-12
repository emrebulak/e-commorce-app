import { CategoryRepository } from './../model/Category.repository';
import { ProductRepository } from './../model/Product.repository';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';


declare var $: any;

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent, HeroComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss', 
})
export class ShopComponent implements OnInit {
  heroTitle: string = "Shop";

  constructor(private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private productService: ProductService,
    private categoryService: CategoryService) {

  }


  ngOnInit() {

    console.log(this.productRepository.getProducts());
    
  }

  get products(): Product[] {
    return this.productRepository.getProducts();
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
    e.stopPropagation();

  }

}
