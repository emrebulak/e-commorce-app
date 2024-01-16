import { AuthGuard } from './admin/auth.guard';
import { MainComponent } from './admin/main/main.component';
import { CheckoutComponent } from './shop/cart/checkout/checkout.component';
import { DetailComponent } from './shop/detail/detail.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./shop/shop.component').then(m => m.ShopComponent)
    },
    {
        path: 'cart', loadComponent: () => import('./shop/cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'contact', loadComponent: () => import('./shop/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'checkout', component: CheckoutComponent,
    },
    {
        path: 'ordercompleted', loadComponent: () => import('./shop/cart/ordercompleted/ordercompleted.component').then(m => m.OrdercompletedComponent)
    },
    {
        path: 'detail/:id', component: DetailComponent
    },
    {
        path: 'auth', loadComponent: () => import('./admin/auth/auth.component').then(m => m.AuthComponent)
    },
    {
        path: 'main', component: MainComponent, canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '',
    }
];
