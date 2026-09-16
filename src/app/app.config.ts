import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RepositorioPresupuestos } from './data/repositorio-presupuestos.model';
import { RepositorioPresupuestosLocalStorage } from './data/local-storage/repositorio-presupuestos-local-storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosLocalStorage }
  ]
};
