import {ServicioPresupuestable} from './servicio-presupuestable.model';

export class Publicidad implements ServicioPresupuestable {
  readonly nombre = 'Publicidad';
  private readonly precioPublicidad = 400;

  obtenerPrecio(): number {
    return this.precioPublicidad;
  }
}