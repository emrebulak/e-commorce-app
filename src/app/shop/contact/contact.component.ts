import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  heroTitle:string = "Contact";
  address:string = "Ankara, Turkey";
  mail:string = "baranemrebulak@gmail.com";
  phone:string = "+90 555 555 55 55";


}
