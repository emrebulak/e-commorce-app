import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {}
