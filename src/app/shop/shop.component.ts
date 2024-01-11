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
  basketList: any[] = [];

  // products: any[] = [
  //   { id: 1, name: "Nordic Chair One", price: '50.00', image: "../../assets/img/product-3.png" },
  //   { id: 2, name: "Nordic Chair", price: '50.00', image: "../../assets/img/product-1.png" },
  //   { id: 3, name: "Kruzo Aero Chair", price: '78.00', image: "../../assets/img/product-2.png" },
  //   { id: 4, name: "Ergonomic Chair", price: '43.00', image: "../../assets/img/product-3.png" },
  //   { id: 5, name: "Nordic Chair", price: '50.00', image: "../../assets/img/product-1.png" },
  //   { id: 6, name: "Nordic Chair One", price: '50.00', image: "../../assets/img/product-3.png" },
  //   { id: 7, name: "Kruzo Aero Chair", price: '78.00', image: "../../assets/img/product-2.png" },
  //   { id: 8, name: "Ergonomic Chair", price: '43.00', image: "../../assets/img/product-3.png" },
  // ];

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
    this.basketList.push("add basket");
    e.stopPropagation();

  }

}
