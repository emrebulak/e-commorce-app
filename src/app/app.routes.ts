import { DetailComponent } from './shop/detail/detail.component';
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
        path: 'cart', loadComponent: () => import('./shop/cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'contact', loadComponent: () => import('./shop/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'detail/:id', component: DetailComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
