import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { COMMON_SERVICES } from './services';
import { COMMON_INTERCEPTORS } from './interceptors';

@NgModule({
    imports: [AngularCommonModule],
    providers: [
        ...COMMON_SERVICES,
        ...COMMON_INTERCEPTORS
    ],
})
export class CommonModule { }
