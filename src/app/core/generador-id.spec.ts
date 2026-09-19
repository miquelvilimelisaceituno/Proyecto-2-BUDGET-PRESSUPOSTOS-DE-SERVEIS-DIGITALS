import { TestBed } from '@angular/core/testing';
import { GeneradorId } from './generador-id';
import { RepositorioPresupuestos } from '../data/repositorio-presupuestos.model';
import { RepositorioPresupuestosFake } from '../data/repositorio-presupuestos.fake'

describe('GeneradorId', () => {
  let service: GeneradorId;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      providers: [
      { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosFake }]});
    service = TestBed.inject(GeneradorId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
