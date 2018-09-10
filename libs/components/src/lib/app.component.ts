import { TranslateService } from '@ngx-translate/core';

export class AppComponentBase {

    constructor(protected translate: TranslateService) {
        // Set the default language for translations.
        translate.setDefaultLang('en');
        // The default language to use when none are available.
        translate.use('en');
    }
}
