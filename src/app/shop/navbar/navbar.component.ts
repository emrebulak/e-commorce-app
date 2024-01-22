import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../../reducers/basket.actions';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from '../languages/languages.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LanguagesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private store = inject(Store);
  basketCount$: Observable<number | undefined>; 

  constructor() {
    this.basketCount$ = this.store.select('basket');
  }

}
