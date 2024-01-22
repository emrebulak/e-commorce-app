import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeroComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  address:string = "Ankara, Turkey";
  mail:string = "baranemrebulak@gmail.com";
  phone:string = "+90 555 555 55 55";


}
