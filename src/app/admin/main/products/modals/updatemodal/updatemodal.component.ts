import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryRepository } from '../../../../../model/Category.repository';
import { ProductRepository } from '../../../../../model/Product.repository';
import { ToastService } from '../../../../../services/toast.service';
import { Product } from '../../../../../model/Product';
import { Category } from '../../../../../model/Category';
declare var $: any;

@Component({
  selector: 'app-updatemodal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './updatemodal.component.html',
  styleUrl: './updatemodal.component.scss'
})
export class UpdatemodalComponent implements OnInit{

  constructor(private categoryRepository: CategoryRepository, private productRepository:ProductRepository, private toast:ToastService) { }

  @Input() editProduct!: Product;

  updateProductForm: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    categoryId: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }


  updateProduct() {    
    this.productRepository.updateProduct(this.editProduct);
    this.toast.trigger("success", "Product updated successfully");
    $('#updateProductModal').modal('hide');
  }


}
