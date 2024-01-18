import { AuthGuard } from './admin/auth.guard';
import { MainComponent } from './admin/main/main.component';
import { CheckoutComponent } from './shop/cart/checkout/checkout.component';
import { DetailComponent } from './shop/detail/detail.component';
import { Routes } from '@angular/router';
import { ShopGuard } from './shop/shop.guard';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./shop/shop.component').then(m => m.ShopComponent)
    },
    {
        path: 'cart', loadComponent: () => import('./shop/cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'about', loadComponent: () => import('./shop/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'services', loadComponent: () => import('./shop/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'contact', loadComponent: () => import('./shop/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'checkout', component: CheckoutComponent, canActivate: [ShopGuard],
    },
    {
        path: 'ordercompleted', loadComponent: () => import('./shop/cart/ordercompleted/ordercompleted.component').then(m => m.OrdercompletedComponent)
    },
    {
        path: 'detail/:id', component: DetailComponent,
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
