import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadComponent:()=> import('@ws/checkout').then((m) => m.CheckoutComponent) },
];
