import { Injectable } from '@angular/core';
import { RepositorioPresupuestos } from './repositorio-presupuestos.model';
import { Presupuesto } from '../shared/models/presupuesto.model';

@Injectable({ providedIn: 'root' })
export class RepositorioPresupuestosFake extends RepositorioPresupuestos {
    private presupuestos: Presupuesto[] = [];

    listar(): Presupuesto[] {
        return [...this.presupuestos]
    }
    buscarPorId(id: number){
        return this.listar().find((presupuesto)=> presupuesto.id === id)

    }
    guardar(presupuesto: Presupuesto) {
        
        this.presupuestos.push(presupuesto);
    }
}
