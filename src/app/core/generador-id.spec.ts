import { TestBed } from '@angular/core/testing';
import { GeneradorId } from './generador-id';

describe('GeneradorId', () => {
  let service: GeneradorId;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
