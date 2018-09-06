import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';


export const TABS_ROUTES: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/tabs/dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'content',
                loadChildren: '../content/content.module#ContentModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'tabs'
    }
];
