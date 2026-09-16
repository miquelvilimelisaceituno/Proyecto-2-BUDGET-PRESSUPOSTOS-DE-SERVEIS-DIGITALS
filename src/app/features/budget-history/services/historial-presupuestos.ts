import { Injectable, inject } from '@angular/core';
import { RepositorioPresupuestos } from '../../../data/repositorio-presupuestos.model';
import { Presupuesto } from '../../../shared/models/presupuesto.model';

@Injectable({ providedIn: 'root' })
export class HistorialPresupuestos {
    private repositorio = inject(RepositorioPresupuestos);
    buscar(termino: string): Presupuesto[] {
        return this.repositorio.listar().filter(presupuesto =>
            presupuesto.nombre.toLowerCase().includes(termino.toLowerCase())
        );
    }
}
