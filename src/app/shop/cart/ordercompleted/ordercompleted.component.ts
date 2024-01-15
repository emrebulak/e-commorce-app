import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../hero/hero.component';

@Component({
  selector: 'app-ordercompleted',
  standalone: true,
  imports: [RouterLink, HeroComponent],
  templateUrl: './ordercompleted.component.html',
  styleUrl: './ordercompleted.component.scss'
})
export class OrdercompletedComponent {
  heroTitle: string = 'Order Completed';
}
