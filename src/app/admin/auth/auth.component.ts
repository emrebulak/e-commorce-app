import { Component } from '@angular/core';
import { HeroComponent } from '../../shop/hero/hero.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, HeroComponent, ReactiveFormsModule, TranslateModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  heroTitle: string = 'Auth';

  constructor(private router: Router, private authService: AuthService, private translate:TranslateService) { }

  loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  clearForm() {
    this.loginForm.reset();
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.authentication(this.loginForm.value.email, this.loginForm.value.password).subscribe(response => {
        if (response) {
          this.router.navigate(['/main']);
        }else{
          Swal.fire({
            title: this.translate.instant('Swal.ErrorLogin.Title'),
            text: this.translate.instant('Swal.ErrorLogin.Text'),
            icon: "error"
          });
          
        }
      });

    }
  }

}
