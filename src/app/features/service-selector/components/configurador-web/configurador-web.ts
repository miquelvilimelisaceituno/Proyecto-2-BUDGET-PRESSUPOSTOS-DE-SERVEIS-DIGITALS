import { Component, input } from '@angular/core';
import { Web } from '../../models/web.model';

@Component({
  imports: [],
  selector: 'app-configurador-web',
  styleUrl: './configurador-web.css',
  templateUrl: './configurador-web.html',
})
export class ConfiguradorWeb {
  web = input.required<Web>(); //se llama "web" porque recibe la instancia completa de web
  
  alCambiarIdiomas(evento: Event): void {
    const idiomas = evento.target as HTMLInputElement;
    const numeroIdiomas = idiomas.valueAsNumber;
    this.web().idiomas = numeroIdiomas;
}
  alCambiarPaginas(evento: Event): void {
    const paginas = evento.target as HTMLInputElement;
    const numeroPaginas = paginas.valueAsNumber;
    this.web().paginas = numeroPaginas;
}
}
