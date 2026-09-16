import { TestBed } from '@angular/core/testing';
import { SeleccionServicios } from './seleccion-servicios';

describe('SeleccionServicios', () => {
  let service: SeleccionServicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleccionServicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
