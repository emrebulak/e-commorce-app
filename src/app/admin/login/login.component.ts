import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement } from '../../reducers/basket.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
