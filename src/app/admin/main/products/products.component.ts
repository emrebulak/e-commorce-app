import { ProductRepository } from './../../../model/Product.repository';
import { Component, Input } from '@angular/core';
import { Product } from '../../../model/Product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faTrash, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AddmodalComponent } from './modals/addmodal/addmodal.component';
import { UpdatemodalComponent } from './modals/updatemodal/updatemodal.component';
import Swal from 'sweetalert2';
import { ToastService } from '../../../services/toast.service';
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

  constructor(private productRepository:ProductRepository, private toast:ToastService) { }

  showAddProductModal() {
    $('#addProductModal').modal('show');
  }

  deleteProduct(product: Product) {
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
        this.toast.trigger("success", "Product deleted successfully");
        this.productRepository.deleteProduct(product);
      }
    });
  }

}
