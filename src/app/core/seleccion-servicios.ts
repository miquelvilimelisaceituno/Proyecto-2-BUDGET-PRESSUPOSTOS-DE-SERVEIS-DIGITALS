import { Injectable } from '@angular/core';
import { ServicioPresupuestable } from '../features/service-selector/models/servicio-presupuestable.model';

@Injectable({ providedIn: 'root' })
export class SeleccionServicios {
    private seleccionados: ServicioPresupuestable[] = [];

    seleccion(servicio: ServicioPresupuestable): boolean {
        const indexSeleccion = this.seleccionados.indexOf(servicio);
        if(indexSeleccion === -1){
            this.seleccionados.push(servicio)
            return true
        } else {
            this.seleccionados.splice(indexSeleccion, 1)
            return false
        }
    }

    obtenerSeleccionados(): ServicioPresupuestable[]  {
        return [...this.seleccionados] 
    }

    consultarPrecioTotal(): number {
        return this.seleccionados.reduce((acumulado, elementoActual) => acumulado + elementoActual.obtenerPrecio(), 0)
    }
}
