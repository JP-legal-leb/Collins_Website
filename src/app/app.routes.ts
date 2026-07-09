import { Routes } from '@angular/router';

const brand = 'Collins Advisory Group';

export const routes: Routes = [
  {
    path: '',
    title: `${brand} — Accounting, Tax and Advisory`,
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: `About — ${brand}`,
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'services',
    title: `Services — ${brand}`,
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'solutions',
    title: `Solutions — ${brand}`,
    loadComponent: () => import('./pages/solutions/solutions').then((m) => m.Solutions),
  },
  {
    path: 'contact',
    title: `Contact — ${brand}`,
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
