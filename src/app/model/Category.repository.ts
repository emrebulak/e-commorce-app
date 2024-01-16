import { Injectable } from "@angular/core";
import { CategoryService } from './../services/category.service';
import { Category } from './Category';



@Injectable({
    providedIn: 'root'
  })
export class CategoryRepository {

    private categories: Category[] = [];

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategories().subscribe(
            (category) => this.categories = category
        );
    }

    getProductById(id: number): Category | undefined {
        return this.categories.find(c => c.id === id);
    }

    getCategories(): Category[] {
        return this.categories;
    }
}
