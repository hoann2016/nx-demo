import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'product',
    loadComponent: () =>
      import('@ws/product-catalog').then((m) => m.ProductCatalogComponent),
  },
  {
    path: 'orders',
    loadComponent: () => import('@ws/orders').then((m) => m.OrdersComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('@ws/checkout').then((m) => m.CheckoutComponent),
  },
];
