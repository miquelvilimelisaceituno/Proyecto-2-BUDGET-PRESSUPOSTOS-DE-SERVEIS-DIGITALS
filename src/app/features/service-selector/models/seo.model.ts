import {ServicioPresupuestable} from './servicio-presupuestable.model';

export class Seo implements ServicioPresupuestable {
  readonly nombre = 'Seo';
  private readonly precioSeo = 300;

  obtenerPrecio(): number {
    return this.precioSeo;
  }
}