import { Component, Input } from '@angular/core';
import { Product } from '../../../model/Product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faTrash, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AddmodalComponent } from './modals/addmodal/addmodal.component';
import { UpdatemodalComponent } from './modals/updatemodal/updatemodal.component';
declare var $: any;

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AddmodalComponent, UpdatemodalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  @Input() products!: Product[];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faCirclePlus = faCirclePlus;

  showProductModal(){
    $('#addProductModal').modal('show');
  }

}
