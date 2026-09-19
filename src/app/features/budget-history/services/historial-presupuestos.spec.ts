import { TestBed } from '@angular/core/testing';
import { HistorialPresupuestos } from './historial-presupuestos';
import { RepositorioPresupuestos } from '../../../data/repositorio-presupuestos.model';
import { RepositorioPresupuestosFake } from '../../../data/repositorio-presupuestos.fake'

describe('HistorialPresupuestos', () => {
  let service: HistorialPresupuestos;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosFake }]
    });
    service = TestBed.inject(HistorialPresupuestos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
