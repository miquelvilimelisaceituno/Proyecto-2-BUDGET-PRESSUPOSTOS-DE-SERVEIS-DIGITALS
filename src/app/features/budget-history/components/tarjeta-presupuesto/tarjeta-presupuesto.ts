import { Component, input } from '@angular/core';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-tarjeta-presupuesto',
  styleUrl: './tarjeta-presupuesto.css',
  templateUrl: './tarjeta-presupuesto.html',
})
export class TarjetaPresupuesto {
  presupuesto = input.required<Presupuesto>();
}