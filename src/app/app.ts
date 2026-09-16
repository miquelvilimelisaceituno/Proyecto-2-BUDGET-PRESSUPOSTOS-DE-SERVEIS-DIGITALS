import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorServicios } from './features/service-selector/components/selector-servicios/selector-servicios';
import { FormularioCliente } from './features/budget-generator/components/formulario-cliente/formulario-cliente';

@Component({
  imports: [RouterOutlet, SelectorServicios, FormularioCliente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Projecte_2_Budget');
}
