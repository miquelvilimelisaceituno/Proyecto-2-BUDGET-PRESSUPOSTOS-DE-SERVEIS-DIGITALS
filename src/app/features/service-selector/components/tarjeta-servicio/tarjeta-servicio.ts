import { Component, input, output } from '@angular/core';
import { ServicioPresupuestable } from '../../models/servicio-presupuestable.model';

@Component({
  imports: [],
  selector: 'app-tarjeta-servicio',
  styleUrl: './tarjeta-servicio.css',
  templateUrl: './tarjeta-servicio.html',
})
export class TarjetaServicio {
  servicio = input.required<ServicioPresupuestable>();
  seleccionar = output<void>();
  seleccionado = input<boolean>(false);
  sinEsquinaInferior = input<boolean>(false);

  alHacerClic() {
    this.seleccionar.emit();
  }
}
