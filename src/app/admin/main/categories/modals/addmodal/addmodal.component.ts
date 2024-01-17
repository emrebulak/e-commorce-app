import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../../../model/Category';
import { CategoryRepository } from '../../../../../model/Category.repository';
import { ToastService } from '../../../../../services/toast.service';
declare var $: any;

@Component({
  selector: 'app-addmodal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './addmodal.component.html',
  styleUrl: './addmodal.component.scss'
})
export class AddmodalComponent {

  category: Category = new Category();

  addCategoryForm: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private categoryRepository: CategoryRepository, private toast:ToastService) { }

  clearForm() {
    this.addCategoryForm.reset();
  }

  createCategory() {
    this.categoryRepository.saveCategory(this.category);
    this.toast.trigger("success", "Category added successfully");
    this.clearForm();
    $('#addCategoryModal').modal('hide');
  }

}


