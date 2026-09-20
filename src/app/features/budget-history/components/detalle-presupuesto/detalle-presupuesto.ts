import { Component, input, output, ElementRef, afterNextRender, viewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';

@Component({
  imports: [DatePipe],
  selector: 'app-detalle-presupuesto',
  styleUrl: './detalle-presupuesto.css',
  templateUrl: './detalle-presupuesto.html',
})
export class DetallePresupuesto {
  presupuesto = input.required<Presupuesto>();
  volver = output<void>();

  private titulo = viewChild.required<ElementRef<HTMLElement>>('titulo');

  constructor() {
    afterNextRender(() => this.titulo().nativeElement.focus());
  }

  alHacerClicVolver(): void {
    this.volver.emit();
  }
}