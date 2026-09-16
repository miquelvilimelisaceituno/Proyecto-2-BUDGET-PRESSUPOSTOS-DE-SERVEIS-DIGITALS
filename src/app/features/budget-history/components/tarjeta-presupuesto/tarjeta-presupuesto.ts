import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';

@Component({
  imports: [DatePipe],
  selector: 'app-tarjeta-presupuesto',
  styleUrl: './tarjeta-presupuesto.css',
  templateUrl: './tarjeta-presupuesto.html',
})
export class TarjetaPresupuesto {
  presupuesto = input.required<Presupuesto>();
  verDetalle = output<void>();

  alHacerClic(): void {
    this.verDetalle.emit();
  }

  nombresServicios(): string {
    return this.presupuesto().servicios.map(servicio => servicio.nombre).join(', ');
  }
}