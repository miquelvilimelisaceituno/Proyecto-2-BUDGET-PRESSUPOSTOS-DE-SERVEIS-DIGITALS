import { Component, input, output } from '@angular/core';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';

@Component({
  imports: [],
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

}