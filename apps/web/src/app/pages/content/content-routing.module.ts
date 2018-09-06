import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content.component';

export const ContentRoutes: Routes = [
    {
        path: '',
        component: ContentPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ContentRoutes)],
    exports: [RouterModule]
})
export class ContentRoutingModule { }
