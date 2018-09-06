import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentPageComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
    imports: [
        ContentRoutingModule
    ],
    exports: [
        ContentRoutingModule
    ],
    declarations: [
        ContentPageComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ContentModule { }
