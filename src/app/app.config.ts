import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideStore(reducers, { metaReducers }),
    TranslateModule.forRoot({
    defaultLanguage: 'tr',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }).providers!]
};
