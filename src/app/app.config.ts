import {ApplicationConfig, Injector, provideZoneChangeDetection} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {provideRouter} from '@angular/router';
import {HomeComponent} from '@pages/home';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    {
      provide: 'customElementsInitializer',
      useFactory: (injector: Injector) => {
        const homeElement = createCustomElement(HomeComponent, {injector});
        customElements.define('home-page-element', homeElement);
      },
      deps: [Injector]
    }
  ]
};
