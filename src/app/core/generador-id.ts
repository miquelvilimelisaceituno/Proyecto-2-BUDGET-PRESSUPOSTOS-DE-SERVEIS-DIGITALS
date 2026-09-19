import { Injectable, inject } from '@angular/core';
import { RepositorioPresupuestos } from '../data/repositorio-presupuestos.model';

@Injectable({ providedIn: 'root' })
export class GeneradorId {
    private repositorio = inject(RepositorioPresupuestos);
    siguienteId(): number{
        const listaPresupuestos = this.repositorio.listar()
        if(listaPresupuestos.length === 0){
            return 1
        }else{
            return Math.max(...listaPresupuestos.map(presupuesto => presupuesto.id))+1
        }
    }
}
