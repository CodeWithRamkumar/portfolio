import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import('./main-layout/main-layout.component').then((x) => x.MainLayoutComponent),
        // component:MainLayoutComponent
    },
    {
        path: "**",
        redirectTo:"home"
    }
];
