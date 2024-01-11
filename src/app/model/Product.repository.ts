import { ProductService } from './../services/product.service';
import { Injectable, OnInit } from "@angular/core";
import { Product } from "./Product";


@Injectable({
    providedIn: 'root'
  })
export class ProductRepository implements OnInit {

    private products: Product[] = [];

    constructor(private productService: ProductService) {
        this.productService.getProducts().subscribe(
            (products) => this.products = products
        );
    }

    ngOnInit(): void {

    }

    getProductById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    getProducts(): Product[] {
        return this.products;
    }
}
