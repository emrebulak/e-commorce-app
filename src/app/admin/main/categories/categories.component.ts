import { ProductRepository } from './../../../model/Product.repository';
import { Component, Input } from '@angular/core';
import { Category } from '../../../model/Category';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faTrash, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AddmodalComponent } from './modals/addmodal/addmodal.component';
import { UpdatemodalComponent } from './modals/updatemodal/updatemodal.component';
import Swal from 'sweetalert2';
import { ToastService } from '../../../services/toast.service';
import { CategoryRepository } from '../../../model/Category.repository';
declare var $: any;

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AddmodalComponent, UpdatemodalComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  @Input() categories!: Category[];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faCirclePlus = faCirclePlus;
  editCategory!: Category;

  constructor(private toast: ToastService, private categoryRepository: CategoryRepository, private productRepository: ProductRepository) { }

  showAddCategoryModal() {
    $('#addCategoryModal').modal('show');
  }

  deleteCategory(category: Category) {
    Swal.fire({
      title: "Attention!!",
      text: "Are you sure you want to delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        let isThere = false;
        let products = this.productRepository.getProducts();

        products.forEach(product => {
          if (product.categoryId == category.id) {
            isThere = true;
          }
        });

        if (isThere) {
          Swal.fire({
            title: "Attention!!",
            text: "There are products linked to category, category cannot be deleted, you must first remove products linked to category",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
          })
        } else {
          this.toast.trigger("success", "Product deleted successfully");
          this.categoryRepository.deleteCategory(category);
        }
      }
    });
  }

  showupdateCategoryModal(category: Category) {
    let tempData = new Category();
    tempData.id = category.id;
    tempData.name = category.name;
    this.editCategory = tempData;
    $('#updateCategoryModal').modal('show');
  }

}
