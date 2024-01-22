import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ordercompleted',
  standalone: true,
  imports: [RouterLink, HeroComponent, TranslateModule],
  templateUrl: './ordercompleted.component.html',
  styleUrl: './ordercompleted.component.scss'
})
export class OrdercompletedComponent {}
