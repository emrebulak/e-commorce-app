import { ToastService } from './../../../../../services/toast.service';
import { ProductRepository } from './../../../../../model/Product.repository';
import { CategoryRepository } from './../../../../../model/Category.repository';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../../../model/Product';
import { Category } from '../../../../../model/Category';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-addmodal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, TranslateModule],
  templateUrl: './addmodal.component.html',
  styleUrl: './addmodal.component.scss'
})
export class AddmodalComponent {

  constructor(private categoryRepository: CategoryRepository, private productRepository:ProductRepository, private toast:ToastService, private translate:TranslateService) { }

  product: Product = new Product();

  addProductForm: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    categoryId: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  clearForm() {
    this.addProductForm.reset();
  }


  createProduct() {
    this.productRepository.saveProduct(this.product);
    this.toast.trigger("success", this.translate.instant("Main.Products.AddProductModal.ProductAdd"));
    this.clearForm();
    $('#addProductModal').modal('hide');
  }

}
