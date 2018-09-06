import { Routes } from '@angular/router';
/**
 * Root-level route definitions
 * Note: For child paths use the feature modules *-routing.module declaration.
 */
export const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './pages/tabs/tabs.module#TabsModule'
    },
    /**
     * Default path match when no routes match the user's destination path.
     * Redirect to a main page or a 404 page.
     */
    {
        path: '**',
        redirectTo: '/tabs/(dashboard-tab:dashboard)'
    }
];
