import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';

@Component({
  imports: [DatePipe],
  selector: 'app-detalle-presupuesto',
  styleUrl: './detalle-presupuesto.css',
  templateUrl: './detalle-presupuesto.html',
})
export class DetallePresupuesto {
  presupuesto = input.required<Presupuesto>();
  volver = output<void>();

  alHacerClicVolver(): void {
    this.volver.emit();
  }
}