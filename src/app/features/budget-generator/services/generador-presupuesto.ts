import { Injectable, inject } from '@angular/core';
import { Presupuesto, RegistroPrecio } from '../../../shared/models/presupuesto.model';
import { SeleccionServicios } from '../../../core/seleccion-servicios';
import { GeneradorId } from '../../../core/generador-id';
import { RepositorioPresupuestos } from '../../../data/repositorio-presupuestos.model';


@Injectable({ providedIn: 'root' })
export class GeneradorPresupuesto {
    private seleccionServicios = inject(SeleccionServicios);
    private generadorId = inject(GeneradorId);
    private repositorio = inject(RepositorioPresupuestos);

    generar(nombre: string, email: string, telefono: string): Presupuesto {
        const seleccionados = this.seleccionServicios.obtenerSeleccionados();
        const registros = seleccionados.map(servicio => ({ nombre: servicio.nombre, precio: servicio.obtenerPrecio() }))
        const precioTotal = this.seleccionServicios.consultarPrecioTotal();
        const nuevaId = this.generadorId.siguienteId();
        const fecha = Date.now();
        const presupuesto = {nombre, email, telefono, servicios: registros, total: precioTotal, fecha, id: nuevaId};
        this.repositorio.guardar(presupuesto)
        return presupuesto
    }
}
