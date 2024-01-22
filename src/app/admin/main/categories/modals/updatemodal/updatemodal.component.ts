import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../../../model/Category';
import { CategoryRepository } from '../../../../../model/Category.repository';
import { ToastService } from '../../../../../services/toast.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-updatemodal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, TranslateModule],
  templateUrl: './updatemodal.component.html',
  styleUrl: './updatemodal.component.scss'
})
export class UpdatemodalComponent {

  @Input() editCategory!: Category;

  updateCategoryForm: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private categoryRepository: CategoryRepository, private toast:ToastService, private translate:TranslateService) { }

  updateCategory() {  
    this.categoryRepository.updateCategory(this.editCategory);
    this.toast.trigger("success", this.translate.instant("Main.Categories.UpdateCategoryModal.CategoryUpdate"));
    $('#updateCategoryModal').modal('hide');
  }

}
