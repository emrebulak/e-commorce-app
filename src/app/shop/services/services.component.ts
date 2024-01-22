import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeroComponent, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  heroTitle: string = 'Services';

}
