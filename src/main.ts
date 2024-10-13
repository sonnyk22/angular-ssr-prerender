//=============================================================================
// Angular
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//=============================================================================
// Internal Features (App)
import { AppModule } from './app/app.module';

//=============================================================================
// App Environment
import { environment } from './environments/environment';

/* eslint no-console: "off" */
//*****************************************************************************
const options = {
    preserveWhitespaces: false,
};

if (environment.production) {
    enableProdMode();
}
else {
    options.preserveWhitespaces = true;
}

platformBrowserDynamic()
    .bootstrapModule(AppModule, options)
    .catch((err) => console.log(err));  