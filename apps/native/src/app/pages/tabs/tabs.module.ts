import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs-routing.module';

import { DashboardModule } from '../dashboard/dashboard.module';
import { ContentModule } from '../content/content.module';

const PAGE_MODULES = [
    DashboardModule,
    ContentModule
];

@NgModule({
    imports: [
        SharedModule,
        TabsRoutingModule,
        ...PAGE_MODULES
    ],
    declarations: [
        TabsComponent
    ]
})
export class TabsModule { }
