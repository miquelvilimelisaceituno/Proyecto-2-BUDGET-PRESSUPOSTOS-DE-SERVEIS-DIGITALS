import { Component, inject, signal, computed } from '@angular/core';
import { HistorialPresupuestos } from '../../services/historial-presupuestos';
import { TarjetaPresupuesto } from '../tarjeta-presupuesto/tarjeta-presupuesto';


@Component({
  imports: [TarjetaPresupuesto],
  selector: 'app-consulta-historial',
  styleUrl: './consulta-historial.css',
  templateUrl: './consulta-historial.html',
})
export class ConsultaHistorial {
  private historial = inject(HistorialPresupuestos);

  terminoBusqueda = signal('');

  presupuestosFiltrados = computed(() => this.historial.buscar(this.terminoBusqueda()));

  alBuscar(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.terminoBusqueda.set(input.value);
  }
}