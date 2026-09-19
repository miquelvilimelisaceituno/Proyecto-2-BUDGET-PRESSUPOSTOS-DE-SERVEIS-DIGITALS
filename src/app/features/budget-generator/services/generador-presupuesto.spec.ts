import { TestBed } from '@angular/core/testing';
import { GeneradorPresupuesto } from './generador-presupuesto';
import { RepositorioPresupuestos } from '../../../data/repositorio-presupuestos.model';
import { RepositorioPresupuestosFake } from '../../../data/repositorio-presupuestos.fake'

describe('GeneradorPresupuesto', () => {
  let service: GeneradorPresupuesto;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosFake }]
      });
    service = TestBed.inject(GeneradorPresupuesto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
