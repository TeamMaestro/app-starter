import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

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
        ...SHARED_MODULES
    ],
    exports: [
        ...SHARED_MODULES
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
