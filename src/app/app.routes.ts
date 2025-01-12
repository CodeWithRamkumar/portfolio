import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import('./main-layout/main-layout.component').then((x) => x.MainLayoutComponent),
        // component:MainLayoutComponent
    },
    {
        path: "",
        redirectTo:"home",
        pathMatch:'full'
    }
];
