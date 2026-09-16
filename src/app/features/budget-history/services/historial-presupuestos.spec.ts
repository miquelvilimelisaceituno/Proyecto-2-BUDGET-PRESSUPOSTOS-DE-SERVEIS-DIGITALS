import { TestBed } from '@angular/core/testing';
import { HistorialPresupuestos } from './historial-presupuestos';

describe('HistorialPresupuestos', () => {
  let service: HistorialPresupuestos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialPresupuestos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
