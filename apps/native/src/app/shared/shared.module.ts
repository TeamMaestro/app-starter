import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

const Modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    FlexLayoutModule,
    IonicModule
];

const EntryComponents = [

];

const Components = [
    ...EntryComponents,
];

const Directives = [

];

@NgModule({
    imports: [
        ...Modules
    ],
    declarations: [
        ...Components,
        ...Directives,
    ],
    exports: [
        ...Modules,
        ...Components,
        ...Directives
    ],
    entryComponents: [
        ...EntryComponents
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
