import { TestBed } from '@angular/core/testing';
import { GeneradorPresupuesto } from './generador-presupuesto';

describe('GeneradorPresupuesto', () => {
  let service: GeneradorPresupuesto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorPresupuesto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
