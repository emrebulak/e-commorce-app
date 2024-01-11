import { Injectable, OnInit } from "@angular/core";
import { CategoryService } from './../services/category.service';
import { Category } from './Category';



@Injectable({
    providedIn: 'root'
  })
export class CategoryRepository implements OnInit {

    private categories: Category[] = [];

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategories().subscribe(
            (category) => this.categories = category
        );
    }

    ngOnInit(): void {

    }

    getProductById(id: number): Category | undefined {
        return this.categories.find(c => c.id === id);
    }

    getCategories(): Category[] {
        return this.categories;
    }
}
