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

    saveCategory(category: Category) {
        this.categoryService.addCategory(category).subscribe(c => this.categories.push(c));
    }

    
    deleteCategory(category: Category) {
        this.categoryService.deleteCategory(category).subscribe(c => this.categories.splice(this.categories.indexOf(category), 1));
    }
}
