import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

// Temp until lazy-loading tabs is fixed in Ionic 4
import { DashboardPageComponent } from '../dashboard/dashboard.component';
import { ContentPageComponent } from '../content/content.component';

export const TABS_ROUTES: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/tabs/(dashboard-tab:dashboard)'
            },
            {
                path: 'dashboard',
                outlet: 'dashboard-tab',
                component: DashboardPageComponent
            },
            {
                path: 'content',
                outlet: 'content-tab',
                component: ContentPageComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'tabs'
    }
];
