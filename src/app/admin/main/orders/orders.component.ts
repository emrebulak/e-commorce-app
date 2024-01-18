import { OrderRepository } from './../../../model/Order.repository';
import { Component, Input } from '@angular/core';
import { Order } from '../../../model/Order';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faTrash, faCirclePlus, faTruck, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  @Input() orders!: any[];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faCirclePlus = faCirclePlus;
  faTruck = faTruck;
  faHourglassHalf = faHourglassHalf;

  constructor(private orderRepository:OrderRepository, private toast:ToastService) { }

  updateSent(order: Order) {
    order.isSent = !order.isSent;
    this.orderRepository.updateOrder(order);
    this.toast.trigger('success', 'Order updated successfully');
  }

}
