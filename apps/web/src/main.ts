import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { analytics } from './analytics';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '@hive/ui';

if (environment.production) {
    enableProdMode();
    // Inject analytics
    document.write(`${analytics(environment.analytics)}`);
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
