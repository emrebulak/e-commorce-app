import { OrderRepository } from './../../model/Order.repository';
import { CategoryRepository } from './../../model/Category.repository';
import { ProductRepository } from './../../model/Product.repository';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../shop/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Product } from '../../model/Product';
import { CategoriesComponent } from './categories/categories.component';
import { Category } from '../../model/Category';
import { Order } from '../../model/Order';
import { OrdersComponent } from './orders/orders.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, FontAwesomeModule, ProductsComponent, CategoriesComponent, OrdersComponent, TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  faRightFromBracket = faRightFromBracket;

  constructor(
    private authService: AuthService,
    private router: Router,
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private orderRepository: OrderRepository) { }

  ngOnInit(): void {}


  getOrders(): Order[] {
    return this.orderRepository.getOrders();
  }


  getCategories(): Category[] {
    return this.categoryRepository.getCategories();
  }


  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  logout() {
    this.authService.clear();
    this.router.navigate(['/']);
  }

}
