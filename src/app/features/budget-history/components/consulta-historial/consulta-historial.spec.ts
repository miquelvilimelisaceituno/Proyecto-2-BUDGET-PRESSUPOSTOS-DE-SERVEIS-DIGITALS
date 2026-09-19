import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaHistorial } from './consulta-historial';
import { RepositorioPresupuestos } from '../../../../data/repositorio-presupuestos.model';
import { RepositorioPresupuestosFake } from '../../../../data/repositorio-presupuestos.fake'

describe('ConsultaHistorial', () => {
  let component: ConsultaHistorial;
  let fixture: ComponentFixture<ConsultaHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaHistorial],
      providers: [
        { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosFake }]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaHistorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
