import { TestBed } from '@angular/core/testing';
import { RepositorioPresupuestosLocalStorage } from './repositorio-presupuestos-local-storage';

describe('RepositorioPresupuestosLocalStorage', () => {
  let service: RepositorioPresupuestosLocalStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorioPresupuestosLocalStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
