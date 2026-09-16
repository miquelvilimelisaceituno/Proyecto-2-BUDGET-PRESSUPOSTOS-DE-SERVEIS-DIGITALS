import { Injectable } from '@angular/core';
import { RepositorioPresupuestos } from '../repositorio-presupuestos.model';
import { Presupuesto } from '../../shared/models/presupuesto.model';

@Injectable({ providedIn: 'root' })
export class RepositorioPresupuestosLocalStorage extends RepositorioPresupuestos {
    private readonly claveAlmacenamiento = 'presupuestos';

    listar(): Presupuesto[] {
        const datosGuardados = localStorage.getItem(this.claveAlmacenamiento)
        if(datosGuardados === null){
            return []
        }else{
            return JSON.parse(datosGuardados)
        }
    }
    buscarPorId(id: number){
        return this.listar().find((presupuesto)=> presupuesto.id === id)

    }
    guardar(presupuesto: Presupuesto) {
        const listaPresupuestos = this.listar();
        listaPresupuestos.push(presupuesto);
        localStorage.setItem(this.claveAlmacenamiento, JSON.stringify(listaPresupuestos)) 
        // no necesita return porque su tipo es void
    }
}
