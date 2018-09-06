import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TABS_ROUTES } from './tabs.routes';

@NgModule({
    imports: [
        RouterModule.forChild(TABS_ROUTES)
    ],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
