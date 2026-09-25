import { Component, inject, signal } from '@angular/core';
import { GeneradorPresupuesto } from '../../services/generador-presupuesto';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';
import { form, required, pattern, email, FormField } from '@angular/forms/signals';

export interface DatosFormularioCliente {
    nombre: string;
    email: string;
    telefono: string;
  }

@Component({
  imports: [FormField],
  selector: 'app-formulario-cliente',
  styleUrl: './formulario-cliente.css',
  templateUrl: './formulario-cliente.html',
})

export class FormularioCliente {
  private generadorPresupuesto = inject(GeneradorPresupuesto);
 
  presupuestoGenerado: Presupuesto | undefined;

  alEnviar(evento: Event): void {
    evento.preventDefault();
    if(this.formularioCliente().invalid()){
      return;
    }
    const valores = this.datosFormulario();
    this.presupuestoGenerado = this.generadorPresupuesto.generar(valores.nombre, valores.email, valores.telefono);
  }

  private datosFormulario = signal<DatosFormularioCliente>({nombre: '', email: '', telefono: ''});
  formularioCliente = form(this.datosFormulario, (path) => {
    required(path.nombre, { message: 'El nom es obligatori' });
    pattern(path.nombre, /^[a-zA-ZàèéíïòóúüçñÀÈÉÍÏÒÓÚÜÇÑ·\s'-]+$/, { message: 'No feu servir números o caràcters inadequats' });
    required(path.email, { message: 'El correu electrònic es obligatori' });
    email(path.email, { message: 'Doneu una adressa de correu electrònica vàlida' });
    required(path.telefono, { message: 'El telèfon es obligatori' });
    pattern(path.telefono, /^\d{9}$/, { message: 'El número de telèfon ha de tenir 9 xifres' });

  });
}
