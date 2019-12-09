import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationRef } from "@angular/core";
import { enableDebugTools } from "@angular/platform-browser";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


  platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
    let applicationRef = module.injector.get(ApplicationRef);
    let appComponent = applicationRef.components[0];
    enableDebugTools(appComponent);
  });