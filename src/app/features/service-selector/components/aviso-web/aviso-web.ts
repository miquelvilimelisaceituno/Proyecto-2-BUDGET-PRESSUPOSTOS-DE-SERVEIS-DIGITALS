import { Component, viewChild, afterNextRender, ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-aviso-web',
  styleUrl: './aviso-web.css',
  templateUrl: './aviso-web.html',
})
export class AvisoWeb {
  dialogo = viewChild.required<ElementRef<HTMLDialogElement>>('dialogo');
  
  constructor() {
    afterNextRender(() => this.dialogo().nativeElement.showModal());
  }

}
