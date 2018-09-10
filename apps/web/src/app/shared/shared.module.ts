import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const SHARED_MODULES = [
    CommonModule,
    IonicModule
];

/**
 * Module responsible for sharing components, pipes, guards, etc.
 * across all modules inside the application.
 */
@NgModule({
    imports: [
        TranslateModule.forChild(),
        ...SHARED_MODULES
    ],
    exports: [
        ...SHARED_MODULES,
        TranslateModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
