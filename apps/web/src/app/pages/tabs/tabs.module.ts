import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { TabButtonComponent } from './components/tab-button/tab-button.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        TabsRoutingModule,
        SharedModule
    ],
    declarations: [
        TabsComponent,
        TabbarComponent,
        TabButtonComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class TabsModule { }
