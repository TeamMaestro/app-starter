import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Public modules to be shared across all consuming feature modules.
 */
const SHARED_MODULES = [
    IonicModule,
    CommonModule
];

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
