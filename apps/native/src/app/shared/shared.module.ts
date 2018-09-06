import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/**
 * Public modules to be shared across all consuming feature modules.
 */
const SHARED_MODULES = [IonicModule, CommonModule];

@NgModule({
    imports: [...SHARED_MODULES],
    exports: [...SHARED_MODULES],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
