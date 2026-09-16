import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorServicios } from './features/service-selector/components/selector-servicios/selector-servicios';

@Component({
  imports: [RouterOutlet, SelectorServicios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Projecte_2_Budget');
}
