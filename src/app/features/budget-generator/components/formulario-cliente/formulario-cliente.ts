import { Component, inject } from '@angular/core';
import { GeneradorPresupuesto } from '../../services/generador-presupuesto';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';

@Component({
  imports: [],
  selector: 'app-formulario-cliente',
  styleUrl: './formulario-cliente.css',
  templateUrl: './formulario-cliente.html',
})
export class FormularioCliente {
  private generadorPresupuesto = inject(GeneradorPresupuesto);
  presupuestoGenerado: Presupuesto | undefined;
  alEnviar(evento: Event, nombre: string, email: string, telefono: string): void {
    evento.preventDefault();
    this.presupuestoGenerado = this.generadorPresupuesto.generar(nombre, email, telefono);
  }
}
