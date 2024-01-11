import { ShopComponent } from './shop/shop.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./shop/shop.component').then(m => m.ShopComponent)
    },
    {
        path: 'login', loadComponent: () => import('./admin/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '**',
        redirectTo: '',
    }
];
