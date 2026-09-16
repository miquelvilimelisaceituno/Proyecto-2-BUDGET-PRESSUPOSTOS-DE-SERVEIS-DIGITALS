import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaHistorial } from './consulta-historial';

describe('ConsultaHistorial', () => {
  let component: ConsultaHistorial;
  let fixture: ComponentFixture<ConsultaHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaHistorial],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaHistorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
