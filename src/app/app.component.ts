import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shop/navbar/navbar.component';
import { FooterComponent } from './shop/footer/footer.component';
import { BacktotopComponent } from './shop/backtotop/backtotop.component';
import { TranslateModule } from '@ngx-translate/core';

declare var $: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent, FooterComponent, BacktotopComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

}
