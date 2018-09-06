import { NgModule } from '@angular/core';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { TabButtonComponent } from './components/tab-button/tab-button.component';

@NgModule({
    imports: [
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        TabbarComponent,
        TabButtonComponent
    ]
})
export class TabsModule { }
