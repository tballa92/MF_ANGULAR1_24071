import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appEffect, appStore } from './store/store';
import { provideEffects } from '@ngrx/effects';
import { TodoService } from './store/todo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // store regisztrálása
    provideStore(appStore), // regisztrálom a store elmet
    provideEffects(appEffect), // aszinkron effectek
    TodoService // szolgáltatás
  ]
};
