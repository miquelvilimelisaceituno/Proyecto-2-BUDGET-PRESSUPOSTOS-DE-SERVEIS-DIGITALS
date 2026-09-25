import { Component, inject } from '@angular/core';
import { SeleccionServicios } from '../../../../core/seleccion-servicios'
import { Seo } from '../../models/seo.model';
import { Publicidad } from '../../models/publicidad.model';
import { Web } from '../../models/web.model';
import { ServicioPresupuestable } from '../../models/servicio-presupuestable.model';
import { TarjetaServicio } from '../tarjeta-servicio/tarjeta-servicio';
import { ConfiguradorWeb } from '../configurador-web/configurador-web'
import { AvisoWeb } from '../aviso-web/aviso-web';


@Component({
  imports: [TarjetaServicio, ConfiguradorWeb, AvisoWeb],
  selector: 'app-selector-servicios',
  styleUrl: './selector-servicios.css',
  templateUrl: './selector-servicios.html',
})
export class SelectorServicios {
  private seleccionServicios = inject(SeleccionServicios);
  seo = new Seo();
  publicidad = new Publicidad();
  web = new Web(0, 0);

  alSeleccionar(servicio: ServicioPresupuestable): void {
    this.seleccionServicios.seleccion(servicio)
  }

  estaSeleccionado(servicio: ServicioPresupuestable): boolean {
    return this.seleccionServicios.obtenerSeleccionados().includes(servicio)
  }

  total(): number {
    return this.seleccionServicios.consultarPrecioTotal()
  }
}
