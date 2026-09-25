import { Routes } from '@angular/router';
import { PaginaInicio } from './pages/pagina-inicio/pagina-inicio';
import { PaginaPresupuesto } from './pages/pagina-presupuesto/pagina-presupuesto';

export const routes: Routes = [
    { path: '', component: PaginaInicio },
    { path: 'presupuesto/:id', component: PaginaPresupuesto },
    { path: '**', redirectTo: '' },
];
