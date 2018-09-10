import { Component } from '@angular/core';
import { AppComponentBase } from '@hive/components';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent extends AppComponentBase {

    constructor(protected translate: TranslateService) {
        super(translate);
    }

}
