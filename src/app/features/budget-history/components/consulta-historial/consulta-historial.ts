import { Component, inject, signal, computed } from '@angular/core';
import { HistorialPresupuestos } from '../../services/historial-presupuestos';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';
import { TarjetaPresupuesto } from '../tarjeta-presupuesto/tarjeta-presupuesto';
import { DetallePresupuesto } from '../detalle-presupuesto/detalle-presupuesto';

@Component({
  imports: [TarjetaPresupuesto, DetallePresupuesto],
  selector: 'app-consulta-historial',
  styleUrl: './consulta-historial.css',
  templateUrl: './consulta-historial.html',
})
export class ConsultaHistorial {
  private historial = inject(HistorialPresupuestos);

  terminoBusqueda = signal('');
  presupuestoSeleccionado = signal<Presupuesto | null>(null);

  presupuestosFiltrados = computed(() => this.historial.buscar(this.terminoBusqueda()));

  alBuscar(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.terminoBusqueda.set(input.value);
  }

  alSeleccionar(presupuesto: Presupuesto): void {
    this.presupuestoSeleccionado.set(presupuesto);
  }

  alVolver(): void {
    this.presupuestoSeleccionado.set(null);
  }
}