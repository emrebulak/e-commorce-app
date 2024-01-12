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
        return this.products.find(p => p.id == id);
    }

    getProducts(categoryId: number | null = null): Product[] {
        if (categoryId != null) {
            return this.products.filter(p => p.categoryId == categoryId);
        } else {
            return this.products;
        }
    }
}
