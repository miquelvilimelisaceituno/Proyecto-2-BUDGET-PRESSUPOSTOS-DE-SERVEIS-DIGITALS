import { Component } from '@angular/core';
import { SelectorServicios } from '../../features/service-selector/components/selector-servicios/selector-servicios';
import { FormularioCliente } from '../../features/budget-generator/components/formulario-cliente/formulario-cliente';
import { ConsultaHistorial } from '../../features/budget-history/components/consulta-historial/consulta-historial';

@Component({
  imports: [SelectorServicios, FormularioCliente, ConsultaHistorial],
  selector: 'app-pagina-inicio',
  styleUrl: './pagina-inicio.css',
  templateUrl: './pagina-inicio.html',
})
export class PaginaInicio {}
