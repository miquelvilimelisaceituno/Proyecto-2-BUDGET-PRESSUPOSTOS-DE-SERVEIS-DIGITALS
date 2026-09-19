import { Component, input } from '@angular/core';
import { Web } from '../../models/web.model';

@Component({
  imports: [],
  selector: 'app-configurador-web',
  styleUrl: './configurador-web.css',
  templateUrl: './configurador-web.html',
})
export class ConfiguradorWeb {
  web = input.required<Web>(); 
  
  incrementarPaginas(): void {
    this.web().paginas++;
  }
  decrementarPaginas(): void {
    if (this.web().paginas > 0) this.web().paginas--;
  }
  incrementarIdiomas(): void {
    this.web().idiomas++;
  }
  decrementarIdiomas(): void {
    if (this.web().idiomas > 0) this.web().idiomas--;
  }
}
