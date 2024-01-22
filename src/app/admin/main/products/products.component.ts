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
import { TranslateModule, TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AddmodalComponent, UpdatemodalComponent, TranslateModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  @Input() products!: Product[];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faCirclePlus = faCirclePlus;
  editProduct: Product = new Product();

  constructor(private productRepository: ProductRepository, private toast: ToastService, private translate:TranslateService) { }



  showAddProductModal() {
    $('#addProductModal').modal('show');
  }

  showUpdateProductModal(product: Product) {
    let tempData = new Product();
    tempData.id = product.id;
    tempData.name = product.name;
    tempData.price = product.price;
    tempData.categoryId = product.categoryId;
    tempData.image = product.image;
    tempData.description = product.description;
    this.editProduct = tempData;
    
    $('#updateProductModal').modal('show');
  }

  deleteProduct(product: Product) {
    Swal.fire({
      title: this.translate.instant("Swal.DeleteProduct.Title"),
      text: this.translate.instant("Swal.DeleteProduct.Text"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.translate.instant("Swal.DeleteProduct.ConfirmButton"),
      cancelButtonText: this.translate.instant("Swal.DeleteProduct.CancelButton"),
    }).then((result) => {
      if (result.isConfirmed) {
        this.toast.trigger("success", this.translate.instant("Main.Products.ProductDelete"));
        this.productRepository.deleteProduct(product);
      }
    });
  }

}
