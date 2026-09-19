import {ServicioPresupuestable} from './servicio-presupuestable.model';

export class Web implements ServicioPresupuestable {
  readonly nombre = 'Web';
  private readonly precioWeb = 500;
  private readonly precioIdiomasPaginas = 30;

  constructor(public idiomas: number, public paginas: number){}

  obtenerPrecio(): number {
    return this.precioWeb + (this.precioIdiomasPaginas*(this.idiomas + this.paginas))
}
}