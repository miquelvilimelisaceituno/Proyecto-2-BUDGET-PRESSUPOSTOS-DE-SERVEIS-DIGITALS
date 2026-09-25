import { Component, input, numberAttribute, inject, computed } from '@angular/core';
import { RepositorioPresupuestos } from '../../data/repositorio-presupuestos.model';
import { DetallePresupuesto } from '../../features/budget-history/components/detalle-presupuesto/detalle-presupuesto';
import { Router } from '@angular/router';


@Component({
  imports: [DetallePresupuesto],
  selector: 'app-pagina-presupuesto',
  styleUrl: './pagina-presupuesto.css',
  templateUrl: './pagina-presupuesto.html',
})
export class PaginaPresupuesto {
  private repositorio = inject(RepositorioPresupuestos);
  private router = inject(Router);
  id = input.required({ transform: numberAttribute });
  presupuesto = computed(() => this.repositorio.buscarPorId(this.id()));

  alVolver(): void{
    this.router.navigateByUrl('/');
  }
}
